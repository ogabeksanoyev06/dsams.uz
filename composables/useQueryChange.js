export function useQueryChange() {
  const router = useRouter();
  const routeQuery = { ...router.currentRoute.value.query };
  const currentQuery = { ...router.currentRoute.value.query };

  /**
   * Query-ni yangilash
   * @param {string} key - Query kaliti
   * @param {string|undefined} value - Query qiymati
   */
  const updateQuery = async (key, value) => {
    if (!value) {
      delete routeQuery[key];
    } else {
      routeQuery[key] = value;
    }

    if (JSON.stringify(routeQuery) !== JSON.stringify(currentQuery)) {
      await router.replace({ query: routeQuery });
    }
  };

  /**
   * Query parametrlarini yangilash
   * @param {Object} params - Parametrlar obyekti
   */
  const updateQueryParams = async (params) => {
    Object.keys(params).forEach((key) => {
      if (!params[key]) {
        delete routeQuery[key];
      } else {
        routeQuery[key] = params[key];
      }
    });

    if (JSON.stringify(routeQuery) !== JSON.stringify(currentQuery)) {
      await router.replace({ query: routeQuery });
    }
  };

  return {
    updateQuery,
    updateQueryParams,
  };
}
