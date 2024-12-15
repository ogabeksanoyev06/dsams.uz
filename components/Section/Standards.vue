<template>
  <div class="py-10">
    <div class="container">
      <div class="mb-5 flex flex-wrap items-center justify-between gap-2 md:mb-6">
        <h2 class="text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">Standartlar</h2>
        <NuxtLink>
          <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-right" class="transition-300 h-auto !bg-transparent !p-0 text-foreground hover:text-primary">Barcha standartlar</UiButton>
        </NuxtLink>
      </div>
      <div class="mb-6 rounded-xl bg-background p-4">
        <h3 class="mb-2 text-lg font-semibold md:text-xl xl:text-2xl">ISO: Xalqaro standartlashtirish tashkiloti</h3>
        <p class="sm:text-base">
          Xalqaro standartlar siz har kuni foydalanadigan mahsulot va xizmatlar xavfsiz , ishonchli va yuqori sifatli bo'lishini ta'minlaydi . Ular, shuningdek, korxonalarga barqaror va axloqiy amaliyotlarni qabul qilishda yo'l-yo'riq ko'rsatadi va
          sizning xaridlaringiz nafaqat a'lo darajada bajariladigan, balki sayyoramizni himoya qiladigan kelajakni yaratishga yordam beradi. Aslini olganda, standartlar sifatni vijdon bilan uyg'unlashtirib, kundalik tajribangizni va tanlovingizni
          yaxshilaydi.
        </p>
      </div>
      <transition name="fade" mode="out-in">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2" :class="{ 'xl:grid-cols-3': loading }">
          <template v-if="loading">
            <CardStandardLoading v-for="key in 6" :key />
          </template>
          <template v-else>
            <CardStandard v-for="(item, key) in standards" :key :item />
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
  import { useStandardsStore } from "@/stores/standards.js";

  const standardStore = useStandardsStore();

  const { getStandards } = standardStore;
  const { standards } = storeToRefs(standardStore);

  const { locale } = useI18n();
  const loading = ref(true);

  onMounted(async () => {
    try {
      await getStandards({ lang: locale.value, limit: 9, page: 1 });
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  });
</script>
