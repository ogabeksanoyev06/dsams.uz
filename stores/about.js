import { useApi } from "@/composables/useApi";
import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", () => {
  const api = useApi();

  const info = ref({});

  const getAbout = async (params) => {
    const response = await api.get("users/about", { params });
    info.value = response.data;
    return response.data;
  };

  return { getAbout, info };
});
