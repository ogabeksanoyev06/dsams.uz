import { useApi } from "@/composables/useApi";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", () => {
  const api = useApi();

  const user = ref({});
  const loading = ref(false);

  const getProfileUser = async () => {
    try {
      const response = await api.get("users/me");
      user.value = response.data;
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const getProfileExport = async () => {
    try {
      const response = await api.get("experts/me");
      user.value = response.data;
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const editProfileUser = async (form) => {
    loading.value = true;
    try {
      const response = await api.put("users/profile", form);
      user.value = response.data;
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const editProfileExport = async (form) => {
    loading.value = true;
    try {
      const response = await api.put("experts/profile", form);
      user.value = response.data;
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return { getProfileUser, getProfileExport, editProfileExport, editProfileUser, user, loading };
});
