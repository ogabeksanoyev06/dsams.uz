import CustomToast from "~/components/Common/Toast.vue";
import { useToast } from "vue-toastification";

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = async (text, type = "success") => {
    if (["success", "error", "info", "warning"].includes(type)) {
      toast[type]?.({
        component: CustomToast,
        props: { text, type },
      });
    } else {
      toast({
        component: CustomToast,
        props: { text, type: "info" },
      });
    }
  };

  return { showToast };
};
