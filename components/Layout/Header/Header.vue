<template>
  <header class="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 sm:gap-5">
          <UiButton @click="open = !open" variant="secondary" class="lg:hidden" size="icon-sm"> <Icon class="size-4" name="heroicons:bars-2" /> </UiButton>
          <NuxtLink to="/">
            <img src="/assets/svg/logo.svg" alt="" />
          </NuxtLink>
        </div>
        <nav class="hidden items-center space-x-1 text-sm font-medium lg:flex">
          <NuxtLink
            :to="item.route"
            v-for="(item, key) in nav"
            :key
            class="rounded-lg bg-transparent px-3 py-2 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground [&.router-link-exact-active]:bg-muted [&.router-link-exact-active]:text-foreground"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
      <div class="flex flex-1 items-center justify-end space-x-2">
        <NuxtLink to="/application" v-if="roleCookie === 'user'">
          <UiButton variant="outline" size="sm" class="max-sm:hidden">
            <Icon class="size-4" name="lucide:mail-open" />
            Ariza qoldirish
          </UiButton>
        </NuxtLink>
        <LayoutHeaderLanguageSwitcher />
        <LayoutHeaderAuthorization />
        <LayoutHeaderDarkModeToggle />
      </div>
    </div>

    <UiSheet v-model:open="open">
      <UiSheetContent side="left" title="Menu">
        <template #content>
          <div class="grid gap-6">
            <nav class="mt-6 grid gap-2 text-base">
              <NuxtLink
                :to="item.route"
                v-for="(item, key) in nav"
                :key
                class="rounded-lg bg-transparent px-3 py-2 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground [&.router-link-exact-active]:bg-muted [&.router-link-exact-active]:text-foreground"
              >
                {{ item.name }}
              </NuxtLink>
            </nav>
            <NuxtLink to="/application" v-if="accessToken && roleCookie === 'user'">
              <UiButton variant="outline" size="sm" class="w-full">
                <Icon class="size-4" name="lucide:mail-open" />
                Ariza qoldirish
              </UiButton>
            </NuxtLink>
          </div>
        </template>
        <template #footer>
          <UiSheetFooter> </UiSheetFooter>
        </template>
      </UiSheetContent>
    </UiSheet>
  </header>
</template>

<script setup>
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  const route = useRoute();

  const open = ref(false);

  const accessToken = useCookie("user_token");
  const roleCookie = useCookie("role");

  const nav = computed(() => {
    return [
      {
        name: t("sectors"),
        route: "/sectors",
      },
      {
        name: t("standards"),
        route: "/standards",
      },
      {
        name: t("organizations"),
        route: "/organizations",
      },
      {
        name: t("about"),
        route: "/about",
      },
      {
        name: t("blog"),
        route: "/blogs",
      },
    ];
  });

  watch(route, () => {
    open.value = false;
  });
</script>
