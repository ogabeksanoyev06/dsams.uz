import { useApi } from "@/composables/useApi";
import { useCustomToast } from "@/composables/useCustomToast.js";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const api = useApi();
  const localePath = useLocalePath();
  const router = useRouter();

  const { showToast } = useCustomToast();

  const loading = ref(false);
  const authModal = ref(false);
  const accessToken = useCookie("user_token");

  const loginUser = async (form) => {
    loading.value = true;
    try {
      const response = await api.post("users/login", form);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const loginExport = async (form) => {
    loading.value = true;
    try {
      const response = await api.post("experts/login", form);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const verifyCodeUser = async (id, form) => {
    loading.value = true;
    try {
      const response = await api.post(`users/login/${id}`, form);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const verifyCodeExport = async (id, form) => {
    loading.value = true;
    try {
      const response = await api.post(`experts/login/${id}`, form);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  function setTokens(access) {
    return new Promise((resolve) => {
      useCookie("user_token").value = access;
      resolve(1);
    });
  }

  const logout = async () => {
    showToast("Tizimdan chiqdingiz", "success");
    accessToken.value = null;
    await router.push(localePath("/"));
  };

  return {
    loginUser,
    loginExport,
    verifyCodeUser,
    verifyCodeExport,
    logout,
    setTokens,
    loading,
    authModal,
  };
});
