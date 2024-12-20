import { useI18n } from "vue-i18n";

export const useLanguageSwitcher = () => {
  const { locale } = useI18n();

  const languagesList = [
    {
      name: "O'zbekcha",
      code: "uz",
      flag: "/images/svg/flags/uz.svg",
    },
    {
      name: "English",
      code: "en",
      flag: "/images/svg/flags/en.svg",
    },
    {
      name: "Русский",
      code: "ru",
      flag: "/images/svg/flags/ru.svg",
    },
  ];

  const currentLanguage = computed(() => languagesList.find((lang) => lang.code === locale.value));

  function changeLocale(_locale) {
    useCookie("locale").value = _locale;
    locale.value = _locale;
    window.location.reload();
  }

  return { currentLanguage, languagesList, changeLocale };
};
