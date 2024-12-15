import { useApi } from "@/composables/useApi";
import { defineStore } from "pinia";

export const useSektorStore = defineStore("sektors", () => {
  const api = useApi();

  const sectors = ref([]);
  const sections = ref([]);
  const loadingSection = ref(false);

  const getSektors = async (params) => {
    try {
      const response = await api.get("users/sektors", { params });
      sectors.value = response.data.data;
      return response.data;
    } catch {
      throw error;
    }
  };

  const getSearchSektors = async (params) => {
    try {
      const response = await api.get("sektors/search", { params });
      return response.data;
    } catch {
      throw error;
    } finally {
    }
  };

  const getSektorById = async (id, params) => {
    try {
      loadingSection.value = true;
      const response = await api.get(`users/sektors/${id}`, { params });
      sections.value = response.data?.data?.sections;
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loadingSection.value = false;
    }
  };

  const getSections = async (params) => {
    try {
      const response = await api.get("users/sections", { params });
      return response.data;
    } catch {
      throw error;
    }
  };

  const getSectionById = async (params) => {
    try {
      const response = await api.get(`users/sections/${id}`, { params });

      return response.data;
    } catch {
      throw error;
    }
  };

  return { getSektors, getSections, getSearchSektors, getSektorById, getSectionById, sectors, sections, loadingSection };
});
