import { en, ru, uz } from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "uz",
  defaultLocale: "uz",
  messages: {
    en,
    ru,
    uz,
  },
}));
