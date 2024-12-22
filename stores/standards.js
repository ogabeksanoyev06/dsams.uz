import { useApi } from "@/composables/useApi";
import { defineStore } from "pinia";

export const useStandardsStore = defineStore("standards", () => {
  const api = useApi();

  const standards = ref([]);
  const standard = ref([]);
  const loadingStandardById = ref(false);

  const getStandards = async (params) => {
    try {
      const response = await api.get("users/standarts", { params });
      standards.value = response.data.data;
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getStandardById = async (id, params) => {
    try {
      loadingStandardById.value = true;
      const response = await api.get(`users/standarts/${id}`, { params });
      standard.value = response.data.data;
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loadingStandardById.value = false;
    }
  };

  const searchStandards = async (params) => {
    const response = await api.get(`standarts/search`, { params });
    return response.data;
  };

  return { getStandards, getStandardById, searchStandards, standards, standard, loadingStandardById };
});
