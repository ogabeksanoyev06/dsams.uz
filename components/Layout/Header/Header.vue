<template>
  <header class="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 sm:gap-5">
          <UiButton variant="secondary" class="lg:hidden" size="icon-sm"> <Icon class="size-4" name="heroicons:bars-2" /> </UiButton>
          <NuxtLink :to="localePath('/')">
            <img src="/assets/svg/logo.svg" alt="" />
          </NuxtLink>
        </div>
        <nav class="hidden items-center space-x-1 text-sm font-medium lg:flex">
          <NuxtLink
            :to="localePath(item.route)"
            v-for="(item, key) in nav"
            :key
            class="rounded-lg bg-transparent px-3 py-2 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground [&.router-link-exact-active]:bg-muted [&.router-link-exact-active]:text-foreground"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
      <div class="flex flex-1 items-center justify-end space-x-2">
        <NuxtLink :to="localePath('/application')">
          <UiButton variant="outline" size="sm" class="max-sm:hidden">
            <Icon class="size-4" name="lucide:mail-open" />
            {{ t("menu.submit_application") }}
          </UiButton>
        </NuxtLink>
        <LayoutHeaderLanguageSwitcher />
        <LayoutHeaderAuthorization />
        <LayoutHeaderDarkModeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
  import { useI18n } from "vue-i18n";

  const localePath = useLocalePath();
  const { t } = useI18n();
  const nav = computed(() => {
    return [
      {
        name: t("menu.sektors"),
        route: "/sectors",
      },
      {
        name: t("menu.standards"),
        route: "/standards",
      },
      {
        name: t("menu.organizations"),
        route: "/organizations",
      },
      {
        name: t("menu.about_us"),
        route: "/about",
      },
      {
        name: t("menu.blogs"),
        route: "/blogs",
      },
    ];
  });
</script>
