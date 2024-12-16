<template>
  <div class="flex min-h-screen flex-col bg-muted">
    <LayoutHeader />
    <main class="container relative grid flex-1 grid-cols-1 gap-5 py-8 lg:grid-cols-12">
      <aside class="h-max w-full rounded-xl bg-background p-1 lg:sticky lg:top-20 lg:col-span-3">
        <nav class="flex space-x-2 overflow-x-auto lg:flex-col lg:space-x-0 lg:space-y-1">
          <NuxtLink v-for="item in filteredMenuItems" :key="item.title" :to="item.route" class="[&.router-link-exact-active>button]:bg-accent">
            <UiButton variant="ghost" class="w-full justify-start">
              <Icon class="size-4" :name="item.icon" />
              {{ item.title }}
            </UiButton>
          </NuxtLink>
          <UiSeparator class="hidden bg-accent lg:block" />
          <UiButton variant="ghost" class="w-full justify-start hover:text-destructive" @click="logout">
            <Icon class="size-4" name="lucide:log-out" />
            Tizimdan chiqish
          </UiButton>
        </nav>
      </aside>
      <section class="flex flex-col gap-5 rounded-xl bg-background px-4 py-4 sm:px-6 lg:col-span-9">
        <slot />
      </section>
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
  import { useAuthStore } from "@/stores/auth";
  import { useProfileStore } from "@/stores/profile";

  const accessToken = useCookie("user_token");
  const roleCookie = useCookie("role");

  const profileStore = useProfileStore();
  const authStore = useAuthStore();

  const { getProfileUser, getProfileExport } = profileStore;
  const { logout } = authStore;

  const sidebarNavItems = [
    {
      title: "Mening ma'lumotlarim",
      route: "/profile",
      icon: "lucide:user",
      role: ["user", "export"],
    },
    {
      title: "Baholash",
      route: "/profile/assessments",
      icon: "lucide:chart-bar",
      role: ["export"],
    },
    // {
    //   title: "Exportlarim",
    //   route: "/profile/exports",
    //   icon: "lucide:users",
    // },

    {
      title: "Arizalar ro'yxati",
      route: "/profile/my-applications",
      icon: "lucide:file-text",
      role: ["user"],
    },
  ];
  const { data: profileData, error } = await useAsyncData("profileData", async () => {
    if (accessToken.value && roleCookie.value) {
      if (roleCookie.value === "user") {
        return await getProfileUser();
      } else if (roleCookie.value === "export") {
        return await getProfileExport();
      }
    }
  });
  const filteredMenuItems = computed(() => sidebarNavItems.filter((item) => item.role.includes(roleCookie.value)))
</script>
