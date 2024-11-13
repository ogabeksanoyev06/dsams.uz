import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import { useCustomToast } from '@/composables/useCustomToast.js'

export const useAuthStore = defineStore('auth', () => {
  const api = useApi()
  
  const router = useRouter()
  const { showToast } = useCustomToast()

  const loading = ref(false)
  const accessToken = useCookie('access')

  const login = async (form) => {
    loading.value = true
    try {
      const response = await api.post('/users/login', form)
      return response.data
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  const verifyCode = async (id, form) => {
    loading.value = true
    try {
      const response = await api.post(`users/login/${id}`, form)
      return response.data
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  const checkAuth = computed(() => !!accessToken.value)

  return {
    login,
    verifyCode,
    checkAuth,
    loading,
  }
})
