<template>
  <div class="flex w-full items-center justify-center">
    <UiDialog :open="modelValue" @update:open="emit('update:modelValue', $event)">
      <UiDialogContent class="sm:max-w-[410px] w-full" title="Avtorizatsiya" :description="step === 2 ? '' : 'SMS-dan tasdiqlash kodini kiriting. Tasdiqlash kodi emailga yuborildi'">
        <template #content>
          <Transition name="fade" mode="out-in">
            <div v-if="step === 1" class="grid gap-4 py-4">
              <div class="grid gap-1.5">
                <UiLabel for="email" class="text-right"> Foydalanuvchi turi </UiLabel>
                <UiSelect v-model="role">
                  <UiSelectTrigger placeholder="Select an option" />
                  <UiSelectContent class="!w-full">
                    <UiSelectGroup>
                      <UiSelectItem v-for="(role, i) in userRole" :key="i" :value="role.id" :text="role.name" />
                    </UiSelectGroup>
                  </UiSelectContent>
                </UiSelect>
              </div>
              <div class="grid gap-1.5">
                <UiLabel for="email" class="text-right"> Elektron pochtangizni kiriting </UiLabel>
                <UiInput id="email" placeholder="Elektron pochtangizni kiriting" v-model="values.email" type="email" :error="$v.email.$error" />
              </div>
            </div>
            <div v-else>
              <button class="leading-130 transition-300 group flex items-center gap-1.5 rounded-lg border border-transparent bg-muted/60 px-2 py-1 text-sm font-medium hover:bg-muted hover:text-primary" @click="step = 1">
                {{ values.email }}
                <Icon name="heroicons:pencil-square" class="transition-300 size-5 text-primary/65 group-hover:text-primary" />
              </button>
              <UiOtp v-model="values.otp" :fields="4" class="my-5" />
              <UiTimer :key="timer" :timer :seconds-val="120" @timeout="timeout" @resend="sendCode" />
            </div>
          </Transition>
        </template>
        <template #footer>
          <UiDialogFooter>
            <UiButton class="w-full" @click="handleSubmitForm" :text="step === 1 ? 'Davom etish' : 'Kirish'" :disabled="$v.$invalid || (step === 2 && !values.otp)" :loading="loading" />
          </UiDialogFooter>
        </template>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>

<script setup>
  import { useCustomToast } from "@/composables/useCustomToast.js";
  import { useAuthStore } from "@/stores/auth.js";
  import { useProfileStore } from "@/stores/profile.js";
  import { useTranslate } from "~/utils/i18n-validators";

  defineProps({ modelValue: Boolean });

  const emit = defineEmits(["update:modelValue"]);

  const { requiredIf, email, minLength } = useTranslate();

  const { showToast } = useCustomToast();
  const router = useRouter();

  const accessToken = useCookie("user_token");
  const roleCookie = useCookie("role");

  const authStore = useAuthStore();
  const profileStore = useProfileStore();

  const { loginUser, loginExport, verifyCodeUser, verifyCodeExport, setTokens } = authStore;
  const { getProfileUser, getProfileExport } = profileStore;

  const { loading } = storeToRefs(authStore);

  const step = ref(1);
  const timer = ref(true);
  const uuid = ref("");
  const role = ref("user");

  const userRole = [
    {
      id: "user",
      name: "Foydalanuvchi",
    },
    {
      id: "export",
      name: "Expert",
    },
  ];

  const { values, $v } = useForm(
    {
      email: "",
      otp: "",
    },
    {
      email: { required: requiredIf(() => step.value === 1), email },
      otp: { required: requiredIf(() => step.value === 2), minLength: minLength(4) },
    }
  );

  const closeModal = () => {
    emit("update:modelValue", false);
    step.value = 1;
    uuid.value = "";
    timer.value = true;
  };

  const handleSubmitForm = async () => {
    $v.value.$touch();
    if (!$v.value.$invalid) {
      if (step.value === 1) {
        sendCode();
      } else {
        await handleVerifyCode();
      }
    }
  };
  const sendCode = async () => {
    loading.value = true;
    try {
      let response;
      if (role.value === "user") {
        response = await loginUser({ email: values.email });
      } else {
        response = await loginExport({ email: values.email });
      }
      if (response.status) {
        step.value = 2;
        uuid.value = response.data.uuid;
        timer.value = true;
        showToast("Emailingizga tasdiqlash kodi yuborildi", "success");
      }
    } catch (error) {
      console.log(error.response?.data?.message);
      showToast(error.response?.data?.message, "error");
    } finally {
      loading.value = false;
    }
  };

  const handleVerifyCode = async () => {
    loading.value = true;
    try {
      let response;
      if (role.value === "user") {
        response = await verifyCodeUser(uuid.value, { code: values.otp });
      } else {
        response = await verifyCodeExport(uuid.value, { code: values.otp });
      }
      if (response.status) {
        showToast(response.message, "success");
        closeModal();
        roleCookie.value = role.value;
        await setTokens(response.data.auth_token);
      }
    } catch (error) {
      console.log(error);
      showToast(error.response?.data?.message, "error");
    } finally {
      loading.value = false;
    }
  };

  const timeout = () => {
    timer.value = false;
  };
  watch([accessToken, roleCookie, step === 2], () => {
    if (accessToken.value && roleCookie.value) {
      if (role.value === "user") {
        getProfileUser();
      } else {
        getProfileExport();
      }
    }
  });
</script>
