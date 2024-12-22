<template>
  <div class="bg-muted/35 py-10">
    <div class="container">
      {{ file }}
      <UiFileInput v-model="file" @update:modelValue="handleUpload" />
      <div class="mb-5 flex flex-wrap items-center justify-between gap-2 md:mb-10">
        <h2 class="text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">{{ $t("sectors") }}</h2>
        <NuxtLink :to="localePath('/sectors')">
          <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-right" class="transition-300 h-auto !bg-transparent !p-0 text-foreground hover:text-primary">{{ $t("allSectors") }}</UiButton>
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
  import { useApplicationStore } from "@/stores/application.js";
  import { useSektorStore } from "@/stores/sektors.js";

  const file = ref(null);

  const applicationStore = useApplicationStore();
  const { uploadFile } = applicationStore;

  const sektorStore = useSektorStore();
  const localePath = useLocalePath();

  const { getSektors } = sektorStore;
  const sectors = ref([]);

  const { locale } = useI18n();
  const loading = ref(true);

  const handleUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file.value);
      await uploadFile(data);
    } catch (error) {
      console.error("Faylni yuklashda xatolik:", error);
    }
  };

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
