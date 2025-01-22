// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@vueuse/nuxt", "@nuxt/icon", "@nuxt/fonts", "@samk-dev/nuxt-vcalendar", "@pinia/nuxt", "nuxt-swiper", "dayjs-nuxt", "@nuxtjs/i18n"],

  i18n: {
    types: "composition",
    strategy: "prefix_and_default",
    defaultLocale: "uz",
    lazy: true,
    langDir: "locales",
    locales: [
      { code: "ru", iso: "ru-RU", file: "ru.json" },
      { code: "uz", iso: "uz", file: "uz.json" },
      { code: "en", iso: "en", file: "en.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
    },
  },
  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },

  vcalendar: {
    calendarOptions: {
      masks: {
        weekdays: "WW",
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "https://api.dsams.uz/api/",
    },
  },

  build: {
    transpile: ["vue-toastification"],
  },
});
