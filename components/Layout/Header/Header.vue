<template>
  <header id="header" class="sticky top-0 z-30 border-b bg-background/80 backdrop-blur transition-all duration-700">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 sm:gap-5">
          <UiButton @click="open = !open" variant="secondary" class="lg:hidden" size="icon-sm"> <Icon class="size-4" name="heroicons:bars-2" /> </UiButton>
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
        <NuxtLink :to="localePath('/application')" v-if="roleCookie === 'user'">
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
      <UiSheetContent side="left" class="p-0 py-4">
        <template #content>
          <div class="flex flex-col gap-6 h-full">
            <nav class=" grid gap-2 text-base bg-muted mx-1 p-2 rounded-lg">
              <NuxtLink
                :to="localePath(item.route)"
                v-for="(item, key) in nav"
                :key
                class="rounded-lg  px-3 py-2 text-foreground transition-colors bg-white hover:text-foreground [&.router-link-exact-active]:bg-muted [&.router-link-exact-active]:text-foreground"
              >
                {{ item.name }}
              </NuxtLink>
            </nav>
            <NuxtLink :to="localePath('/application')" class="mx-1 mt-auto">
              <UiButton variant="outline"  class="w-full">
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
  import { computed, onMounted, onUnmounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const open = ref(false);
  const localePath = useLocalePath();

  const accessToken = useCookie("user_token");
  const roleCookie = useCookie("role");

  const { t } = useI18n();

  const lastScrollTop = ref(0);
  let header = null;

  const nav = computed(() => {
    return [
      { name: t("sectors"), route: "/sectors" },
      { name: t("standards"), route: "/standards" },
      { name: t("organizations"), route: "/organizations" },
      { name: t("about"), route: "/about" },
      { name: t("blog"), route: "/blogs" },
    ];
  });

  const showNavbar = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop.value) {
      header?.classList.remove("top-0");
      header?.classList.add("-top-20");
    } else {
      header?.classList.remove("-top-20");
      header?.classList.add("top-0");
    }
    lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
  };

  const handleScroll = () => {
    showNavbar();
  };

  watch(route, () => {
    open.value = false;
  });

  onMounted(() => {
    header = document.getElementById("header");
    if (!header) {
      console.error("Header element not found!");
    }
    lastScrollTop.value = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>
