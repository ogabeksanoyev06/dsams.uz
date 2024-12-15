// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@vueuse/nuxt", "@nuxt/icon", "@nuxt/fonts", "@samk-dev/nuxt-vcalendar", "@pinia/nuxt", "@nuxtjs/i18n", "nuxt-swiper", "dayjs-nuxt"],

  i18n: {
    defaultLocale: "uz",
    lazy: true,
    langDir: "locales",
    locales: [
      { code: "en", file: "en.json" },
      { code: "uz", file: "uz.json" },
      { code: "ru", file: "ru.json" },
    ],
    vueI18n: "./i18n.config.ts",
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
      apiBaseUrl: process.env.API_BASE_URL || "https://dsams-back.onrender.com/api/",
    },
  },

  build: {
    transpile: ["vue-toastification"],
  },
});
