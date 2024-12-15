export const useLanguageSwitcher = () => {
  const { setLocale, locale } = useI18n();

  const cookieLocale = useCookie("i18n_redirected");

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

  async function changeLocale(_locale) {
    locale.value = _locale;
    setLocale('uz');
    window.location.reload();
  }

  return { currentLanguage, languagesList, changeLocale };
};
