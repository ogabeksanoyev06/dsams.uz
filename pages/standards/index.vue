<template>
  <div>
    <div class="bg-background py-6 sm:py-8">
      <div class="flex-between container items-center gap-4 max-sm:flex-col max-sm:items-start">
        <div class="shrink-0">
          <h1 class="text-xl font-bold sm:text-2xl md:text-3xl">Standart</h1>
        </div>
        <!-- <div class="group relative flex w-full max-w-[400px] items-center justify-center">
          <UiInput type="text" placeholder="Standard qidirish" class="cursor-pointer pl-10 pr-10" v-model="search" />
          <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
            <Icon name="i-lucide:search" class="transition-300 size-5 text-muted-foreground group-hover:text-accent-foreground" />
          </span>
          <span class="absolute inset-y-0 end-0 flex cursor-pointer items-center justify-center px-2" @click="search = ''">
            <Icon name="i-lucide:x" class="transition-300 size-5 text-muted-foreground hover:text-destructive" :class="search ? 'opacity-100' : 'opacity-0'" />
          </span>
        </div> -->
      </div>
    </div>
    <div class="py-8">
      <div class="container">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="group flex flex-col overflow-hidden rounded-xl border bg-background" v-for="(item, key) in standards.data" :key>
            <div class="flex-1 p-4">
              <p class="mb-2">Standart</p>
              <NuxtLink :to="`/standards/${item?._id}`" class="leading-130 text-xl font-medium text-primary hover:underline">{{ item.name }}</NuxtLink>
              <!-- <h5 class="leading-130 text-xl font-medium">Axborot texnologiyalari</h5> -->
              <h6 class="leading-130 mt-1 line-clamp-3 text-base font-medium" v-html="item.short_description"></h6>
              <p class="leading-130 mt-2 line-clamp-3 text-sm font-normal text-muted-foreground" v-html="item.description" />
            </div>
            <div class="border-t border-muted px-4 py-2">Chop etilgan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStandardsStore } from "@/stores/standards.js";
  import { useI18n } from "vue-i18n";

  const standardStore = useStandardsStore();

  const { getStandards } = standardStore;

  const { locale } = useI18n();

  const search = ref("");

  const { data: standards } = await useAsyncData("standards", async () => {
    return await getStandards({ lang: locale.value, limit: 20, page: 1 });
  });
</script>
