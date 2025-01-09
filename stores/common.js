export const useCommonStore = defineStore("common", () => {
  const authModal = ref(false);

  return { authModal, uploadFile };
});
