<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader />
    <main class="h-full flex-1 bg-muted">
      <slot />
    </main>
    <LayoutFooter />

    <!-- Chiroyli animatsiyali Top Down tugmasi -->
    <button
      @click="scrollToTop"
      class="z-100 flex-center fixed bottom-4 right-4 h-10 w-10 rounded-full bg-primary text-white shadow-lg transition-all duration-500 ease-in-out"
      :class="{ 'scale-100 opacity-100': showButton, 'scale-0 opacity-0': !showButton }"
    >
      <Icon name="lucide:arrow-up" class="text-xl" />
    </button>
  </div>
</template>

<script setup>
  import { useCustomToast } from "@/composables/useCustomToast.js";
  import { useProfileStore } from "@/stores/profile";
  import { onMounted, onUnmounted, ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const { showToast } = useCustomToast();

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

  const showButton = ref(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    showButton.value = window.scrollY > 200; // Tugma faqat 200px dan keyin ko'rinadi
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<style scoped>
  /* Tugma uchun animatsiya */
  button {
    opacity: 0;
    transform: scale(0);
  }

  button.opacity-100.scale-100 {
    opacity: 1;
    transform: scale(1);
  }
</style>
