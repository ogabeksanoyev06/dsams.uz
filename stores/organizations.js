import { useApi } from "@/composables/useApi";
import { defineStore } from "pinia";

export const useOrganizationsStore = defineStore("organizations", () => {
  const api = useApi();

  const getOrganizations = async (params) => {
    try {
      const response = await api.get("users/tashkilots", { params });
      return response.data;
    } catch {
      throw error;
    }
  };

  const getSearchOrganizations = async (params) => {
    try {
      const response = await api.get("users/tashkilots/search", { params });
      return response.data;
    } catch {
      throw error;
    }
  };

  return { getOrganizations, getSearchOrganizations };
});
