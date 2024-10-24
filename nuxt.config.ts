// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  css: ['~/assets/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', 'dayjs-nuxt', '@vueuse/nuxt', 'nuxt-swiper'],
  i18n: {
    langDir: 'locales',
    baseUrl: 'https://dsams.uz',
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru.json' },
      { code: 'uz', iso: 'uz', file: 'uz.json' },
      { code: 'en', iso: 'en', file: 'en.json' },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'i18n_redirected',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
      fallbackLocale: 'uz',
    },
    defaultLocale: 'uz',
    strategy: 'prefix_and_default',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || '',
    },
  },
  build: {
    transpile: ['vue-toastification', '@vuepic/vue-datepicker'],
  },
})
