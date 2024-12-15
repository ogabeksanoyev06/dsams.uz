import { useCustomToast } from "@/composables/useCustomToast.js";
import { useAuthStore } from "@/stores/auth.js";

export default defineNuxtRouteMiddleware((to, from) => {
  const { showToast } = useCustomToast();

  const authStore = useAuthStore();
  const accessToken = useCookie("user_token");
  const roleCookie = useCookie("role");

  const authModal = useState("authModal", () => false);

  if (!accessToken.value || !roleCookie.value) {
    authModal.value = true;
    showToast("Avtorizatsiya talab qilinadi", "error");
    return abortNavigation();
  }
});
