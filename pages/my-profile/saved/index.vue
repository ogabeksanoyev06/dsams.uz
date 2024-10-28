<template>
  <div>
    <div class="flex flex-col gap-5">
      <div class="bg-white company-card rounded-xl transition-300 border-b border-gray-300 shadow-card-2 hover:shadow-none" v-for="item in 10">
        <div class="p-3 md:p-4 max-md:pb-2 flex md:justify-between items-start w-full gap-4 cursor-pointer">
          <div class="flex-y-center gap-2 md:gap-4 w-full">
            <div class="shrink-0">
              <div class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-black before:absolute before:inset-0 w-10 h-10 rounded-md before:rounded-md">
                <div class="w-full h-full object-cover bg-white">
                  <img alt="avatar-image" class="object-cover w-full h-full" src="https://cdn.commeta.uz/60x/https://cdn.commeta.uz/media/uploaded/2024/07/10/commeta_wrBMKUi.png" />
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1 w-full">
              <div class="flex-center-between w-full">
                <NuxtLink :to="localePath('/organizations/slug')" class="flex-y-center gap-2">
                  <span class="font-semibold leading-130 text-dark break-all line-clamp-1">Toshkent davlat iqtisodiyot universiteti</span>
                  <img src="https://cdn.commeta.uz/static/review/static/front/svg/company/verified-gray.png" class="flex-shrink-0 object-cover inline-flex items-center w-5 h-5 group relative _v-tooltip" />
                </NuxtLink>
                <div class="flex gap-2 shrink-0">
                  <span class="max-md:hidden py-1 px-1.5 rounded bg-gray-6 text-xs font-medium"> OTM </span>
                </div>
              </div>
              <div class="flex-y-center gap-2">
                <div class="flex-y-center gap-1">
                  <UIRatingStars v-model="rating" />
                  <p class="text-xs md:text-base font-medium">4.6</p>
                </div>
                <i class="h-4 w-px bg-gray-3 inline-block"></i>
                <div class="flex-y-center gap-1">
                  <p class="text-xs text-gray-5 font-normal shrink-0">04.05.2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-white-100 p-2 pr-4 flex-center-between max-md:gap-0.5">
          <div class="flex gap-2 shrink-0">
            <span class="md:hidden py-1 px-1.5 rounded bg-gray-300 text-xs font-normal leading-130 text-gray-700"> OTM </span>
          </div>
          <UIBookmark :is-saved="isSaved" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'profile',
})

const rating = ref(3)
const isSaved = ref(true)
</script>
