/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}', // Barcha komponentlar uchun
    './layouts/**/*.vue', // Layout fayllari uchun
    './pages/**/*.vue', // Barcha sahifalar uchun
    './plugins/**/*.{js,ts}', // Barcha pluginlar uchun
    './nuxt.config.{js,ts}', // Nuxt konfiguratsiya fayllari
    './app.vue', // App.vue fayli uchun
    './error.vue', // Error sahifasi uchun
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        dark: '#011432',
        yellow: '#F5C502',
        danger: '#ED2424',
        blue: '#2074F1',
        gray: {
          1: '#F3F6FC',
          2: '#DADEE5',
          3: '#C1C7D2',
          4: '#939BA9',
          5: '#4B5970',
          6: '#E9EFF9',
          7: '#F2F2F2',
        },
      },
      boxShadow: {
        card: '0px 12px 48px -12px rgba(1, 20, 50, 0.20)',
        'card-2': '0px 8px 40px 2px rgba(1, 20, 50, 0.08)',
        blog: '0px 12px 48px -12px rgba(1, 20, 50, 0.30)',
        'organizations-image': '0px 6px 32px 0px rgba(188, 199, 225, 0.88)',
        rectangle: '0px 5px 6px 0px rgba(0, 0, 0, 0.03)',
        'yellow-1': '0px 6px 20px 2px rgba(255, 204, 0, 0.16)',
        'yellow-2': '0px 4px 16px 0px rgba(255, 204, 0, 0.40)',
        'swiper-btn': '0px 0px 12px 0px rgba(0, 12, 30, 0.16)',
        header: '0px 6px 20px 0px rgba(1, 20, 50, 0.08)',
      },
      lineHeight: {
        130: '130%',
        140: '140%',
      },
    },
  },
  plugins: [],
}
