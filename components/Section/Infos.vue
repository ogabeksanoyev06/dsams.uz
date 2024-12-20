<template>
  <div class="bg-muted/35 py-10">
    <div class="container">
      <h2 class="text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">{{ t("title2") }}</h2>
      <p class="mt-6 rounded-xl bg-background p-4 sm:text-base">{{ t("description1") }}</p>
      <!-- <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="flex flex-col items-start rounded-xl bg-background p-4">
          <h3 class="text-lg font-semibold md:text-xl xl:text-2xl">Standart nima?</h3>
          <p class="mb-4 mt-1 text-muted-foreground">Sifat va izchillik dunyosiga chuqur kirib boring.</p>
          <UiButton class="mt-auto max-sm:w-full">
            Batafsil
            <Icon class="size-4" name="lucide:arrow-right" />
          </UiButton>
        </div>
        <div class="flex flex-col items-start rounded-xl bg-background p-4">
          <h3 class="text-lg font-semibold md:text-xl xl:text-2xl">Sertifikatlashni qidiryapsizmi?</h3>
          <p class="mb-4 mt-1 text-muted-foreground">Standartga muvofiqlik sertifikatlashtirish organlari va boshqalar tomonidan qanday baholanishini bilib oling.</p>
          <UiButton class="mt-auto max-sm:w-full">
            Batafsil
            <Icon class="size-4" name="lucide:arrow-right" />
          </UiButton>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
</script>
