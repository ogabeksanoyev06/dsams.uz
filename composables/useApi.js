import axios from 'axios'

export const useApi = () => {
  const config = useRuntimeConfig()

  const accessToken = useCookie('access')

  const api = axios.create({
    baseURL: config.public.apiBaseUrl,
    headers: { 'Content-Type': 'application/json' },
  })

  const logout = () => {
    accessToken.value = null
    navigateTo('/auth/login')
  }

  api.interceptors.request.use(
    (reqConfig) => {
      if (accessToken.value) {
        reqConfig.headers['Authorization'] = `Bearer ${accessToken.value}`
      }
      return reqConfig
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        logout()
      }
      return Promise.reject(error)
    },
  )

  return api
}
