<template>
  <div>
    <div class="container py-8">
      <section class="rounded-2xl bg-background p-4 sm:p-8">
        <div class="flex gap-6">
          <div class="w-full max-w-[250px] max-lg:hidden">
            <div class="group w-full shrink-0 overflow-hidden rounded-xl bg-background shadow-md">
              <UiImage class="group-hover:hovered h-[320px] w-full" alt="Verify document" :src="standard.data.photo_url" />
            </div>
          </div>
          <div>
            <h5 class="text-blue mb-2 text-lg font-bold lg:text-xl xl:text-2xl">{{ standard.data.name }}</h5>
            <div class="text-gray-5 mb-5 text-base lg:text-lg xl:text-xl" v-html="standard.data.short_description" />
            <p class="mb-2 text-xl"><span class="font-semibold text-green-500">Chop etilgan</span> {{ standard.data.creation_date }}</p>
          </div>
        </div>
        <section class="mt-8">
          <h2 class="mb-5 text-xl font-bold sm:text-2xl">Umumiy ma’lumotlar</h2>
          <p class="leading-140 text-sm sm:text-base" v-html="standard.data.description" />
        </section>
      </section>
      <section class="mt-10 sm:mt-16">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <NuxtLink :to="`/standards/${item._id}`" v-for="(item, key) in standards.data" :key>
            <div class="transition-300 flex flex-col gap-3 rounded-xl border bg-background p-4">
              <h2 class="leading-140 text-xl font-bold text-primary">{{ item?.name }}</h2>
              <div class="line-clamp-4 text-sm" v-html="item.short_description" />
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  import { useStandardsStore } from "@/stores/standards.js";
  import { useI18n } from "vue-i18n";

  const standardStore = useStandardsStore();

  const { getStandardById, getStandards } = standardStore;

  const { locale } = useI18n();

  const route = useRoute();

  const { data: standard } = await useAsyncData("standard", async () => {
    return getStandardById(route.params.id, { lang: locale.value });
  });

  const { data: standards } = await useAsyncData("standards", async () => {
    return await getStandards({ lang: locale.value, limit: 10, page: 1 });
  });
</script>
