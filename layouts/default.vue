<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader />
    <main class="h-full flex-1 bg-muted">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
  import { useCustomToast } from "@/composables/useCustomToast.js";
  import { useProfileStore } from "@/stores/profile";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const { showToast } = useCustomToast();

  const { locale } = useI18n();
  const localePath = useLocalePath();

  const accessToken = useCookie("user_token");
  const roleCookie = useCookie("role");

  const profileStore = useProfileStore();
  const { user } = storeToRefs(profileStore);

  const { data: profileData } = await useAsyncData("layout", async () => {
    if (accessToken.value && roleCookie.value) {
      if (roleCookie.value === "user") {
        return await profileStore.getProfileUser();
      } else if (roleCookie.value === "export") {
        return await profileStore.getProfileExport();
      }
    }
    return null;
  });

  if (profileData.value) {
    if (!user.value?.data?.name || !user.value?.data?.surname || !user.value?.data?.father_name || !user.value?.data?.phone_number) {
      showToast("Ma'lumotlaringizni to'ldiring!", "info");
      router.push(localePath("/profile"));
    }
  }
</script>
