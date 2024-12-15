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
  import { useProfileStore } from "@/stores/profile";

  const { locale } = useI18n();

  const { localePath } = useLocalePath();

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
</script>
