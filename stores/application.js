import { useApi } from "@/composables/useApi";
import { defineStore } from "pinia";

export const useApplicationStore = defineStore("application", () => {
  const api = useApi();

  const loading = ref(false);

  const createApplication = async (form) => {
    loading.value = true;
    try {
      const response = await api.post("users/application", form);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const getAllApplications = async () => {
    try {
      const response = await api.get("users/applications");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getAllExports = async () => {
    try {
      const response = await api.get("users/experts");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getApplicationsUseAFilter = async (params) => {
    try {
      const response = await api.get("experts/applications", { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getApplicationById = async (id) => {
    try {
      const response = await api.get(`experts/applications/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const rateApplication = async (id, form) => {
    loading.value = true;
    try {
      const response = await api.put(`experts/applications/rating/${id}`, form);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return { createApplication, getAllApplications, getAllExports, getApplicationsUseAFilter, getApplicationById, rateApplication, loading };
});
