<template>
  <div class="container py-4 pb-8">
    <h1 class="mb-6 text-xl font-bold sm:text-2xl md:text-3xl">{{ sector?.data?.sektor?.name }}</h1>
    <div class="column-1 gap-3 space-y-6 md:columns-2 lg:columns-3 xl:gap-6 mb-6">
      <div class="break-inside-avoid" v-for="(item, key) in sector?.data?.sections" :key>
        <div class="cursor-pointer rounded-xl bg-background p-3 font-medium sm:p-4">
          {{ item.name }}
        </div>
      </div>
    </div>
    <CommonNoData />
  </div>
</template>

<script setup>
  import { useSektorStore } from "@/stores/sektors.js";

  const sektorStore = useSektorStore();

  const { getSektorById } = sektorStore;

  const { locale } = useI18n();

  const route = useRoute();

  const { data: sector } = await useAsyncData("sector", async () => {
    return await getSektorById(route.params.id, { lang: locale.value });
  });
</script>
