<template>
  <footer class="bg-background">
    <UiGradientDivider />
    <div class="container flex flex-col items-center justify-between gap-4 py-5 sm:gap-7 lg:flex-row">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
        <img src="/assets/svg/logo.svg" fit="contain" alt="Company Logo" title="Company Logo" class="w-full max-w-[120px] object-contain" />
      </NuxtLink>
      <ul class="flex flex-wrap gap-5">
        <li v-for="(item, key) in nav" :key>
          <NuxtLink class="transition-300 hover:text-primary" :to="localePath(item.route)">{{ item.name }}</NuxtLink>
        </li>
      </ul>

      <p class="text-muted-foreground">&copy; {{ new Date().getFullYear() }} <a href="https://dsams.uz" class="hover:text-primary">dsams.uz</a>.</p>
    </div>
  </footer>
</template>

<script setup>
  const nav = [
    {
      name: "Sektorlar",
      route: "/sectors",
    },
    {
      name: "Standardlar",
      route: "/standards",
    },
    {
      name: "Tashkilotlar",
      route: "/organizations",
    },
    {
      name: "Biz haqimizda",
      route: "/about",
    },
    {
      name: "Blog",
      route: "/blogs",
    },
  ];

  const localePath = useLocalePath();
</script>
