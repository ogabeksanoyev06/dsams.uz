import { defineStore } from "pinia";

export const useSpinStore = defineStore("spin", () => {
  const loader = ref(false);
  const loading = ref(false);

  const showLoader = () => {
    loader.value = true;
  };

  const hideLoader = () => {
    loader.value = false;
  };

  const showLoading = () => {
    loading.value = true;
  };

  const hideLoading = () => {
    loading.value = false;
  };
  return {
    loader,
    loading,
    showLoader,
    hideLoader,
    showLoading,
    hideLoading,
  };
});
