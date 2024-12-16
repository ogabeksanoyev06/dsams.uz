<template>
  <div class="bg-muted/35 py-10">
    <div class="container">
      <div class="mb-5 flex flex-wrap items-center justify-between gap-2 md:mb-10">
        <h2 class="text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">Sektorlar</h2>
        <NuxtLink to="/sectors">
          <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-right" class="transition-300 h-auto !bg-transparent !p-0 text-foreground hover:text-primary">Barcha sektorlar</UiButton>
        </NuxtLink>
      </div>
      <transition name="fade" mode="out-in">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" :class="{ 'gap-3 md:grid-cols-3 xl:grid-cols-4': loading }">
          <template v-if="loading">
            <CardSectorLoading v-for="key in 12" :key />
          </template>
          <template v-else>
            <CardSector v-for="(item, key) in sectors" :key :item />
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
  import { useSektorStore } from "@/stores/sektors.js";

  const sektorStore = useSektorStore();

  const { getSektors } = sektorStore;
  const sectors = ref([]);

  const { locale } = useI18n();
  const loading = ref(true);

  onMounted(async () => {
    try {
      const res = await getSektors({ lang: locale.value, limit: 9, page: 1 });
      sectors.value = res.data;
    } catch (error) {
      console.error("Sektorlarni olishda xatolik:", error);
    } finally {
      loading.value = false;
    }
  });
</script>
