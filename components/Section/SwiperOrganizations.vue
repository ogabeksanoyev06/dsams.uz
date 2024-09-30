<template>
  <div class="flex items-stretch relative">
    <!-- <div class="bg-gradient-to-r from-gray-1 to-transparent w-full z-10 flex-center mt-[82px]"></div> -->
    <div class="container shrink-0 relative z-0 pt-8">
      <div class="relative">
        <SectionTitle :title="'Tashkilotlar'" :link-title="'Barcha tashkilotlar'" :link="'/organizations'" />
        <div class="overflow-hidden px-[300px] -mx-[300px] md:py-5 md:-my-5 relative z-0">
          <Swiper
            class="w-full !overflow-visible !py-5"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="[SwiperAutoplay]"
            :space-between="16"
            :slides-per-view="1"
            :loop="false"
            :speed="500"
            :breakpoints="{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2.2,
              },
              960: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }"
          >
            <SwiperSlide v-for="(review, i) in 10" :key="i">
              <NuxtLink to="/" class="">
                <div class="rounded-2xl bg-white border border-gray-1 transition-300 shadow-card-2 hover:shadow-card group/card md:hover:-translate-y-1.5 max-h-[400px] p-3 pt-9">
                  <div class="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-gray-6 mx-auto shadow-organizations-image mb-5">
                    <img alt="Image" class="w-full h-full rounded-full object-cover bg-white" src="https://cdn.commeta.uz//https://cdn.commeta.uz/media/uploaded/2024/03/29/commeta_slh5e8x.png" />
                  </div>
                  <div class="flex flex-col items-center gap-2 mb-5">
                    <h3 class="text-base text-center font-bold line-clamp-2">Toshkent Davlat Transport Unversiteti</h3>
                    <a href="#" class="flex-center py-2 px-[10px] rounded-lg gap-1 bg-blue/[0.08] text-xs text-blue hover:bg-blue/20 transition-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M6.99993 7.83421C8.00509 7.83421 8.81993 7.01937 8.81993 6.01421C8.81993 5.00906 8.00509 4.19421 6.99993 4.19421C5.99477 4.19421 5.17993 5.00906 5.17993 6.01421C5.17993 7.01937 5.99477 7.83421 6.99993 7.83421Z"
                          stroke="#2074F1"
                          stroke-width="1.5"
                        />
                        <path
                          d="M2.11158 4.95246C3.26074 -0.099206 10.7449 -0.0933725 11.8882 4.95829C12.5591 7.92163 10.7157 10.43 9.09991 11.9816C7.92741 13.1133 6.07241 13.1133 4.89408 11.9816C3.28408 10.43 1.44075 7.91579 2.11158 4.95246Z"
                          stroke="#2074F1"
                          stroke-width="1.5"
                        />
                      </svg>
                      Toshkent shahri
                    </a>
                  </div>
                  <div class="rounded-xl px-3 py-2 gap-3 flex border border-gray-6 w-full">
                    <div class="w-1/3 text-center grid gap-y-1 border-r border-gray-6">
                      <h1 class="text-dark font-medium text-center text-sm">Oliy ta’lim</h1>
                      <p class="text-xs text-gray-4 leading-130">Sektor</p>
                    </div>
                    <div class="w-1/3 text-center grid gap-y-1 border-r border-gray-6">
                      <h1 class="text-dark font-medium text-center text-sm">12.12.2024</h1>
                      <p class="text-xs text-gray-4 leading-130">Vaqt</p>
                    </div>
                    <div class="text-center grid gap-y-1 flex-1">
                      <h1 class="text-dark font-medium text-center text-sm">10</h1>
                      <p class="text-xs text-gray-4 leading-130">Ball</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-overlay-left absolute left-0 top-0 bottom-0 w-[300px] z-[10] pointer-events-none"></div>
          <div class="swiper-overlay-right absolute rotate-180 right-0 top-0 bottom-0 w-[300px] z-[10] pointer-events-none"></div>
          <button
            @click="swiperOrganizations.slidePrev()"
            class="scale-0 bg-white hover:bg-yellow hover:text-white w-8 h-10 lg:w-11 lg:h-11 flex-center shadow-swiper-btn rounded-full transition-300 max-lg:translate-x-[-16px] max-lg:rounded-l-none absolute left-[300px] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[2]"
            :class="{ 'scale-100': !isBeginning }"
          >
            <span class="icon-angle-left text-xl lg:text-2xl"></span>
          </button>
          <button
            @click="swiperOrganizations.slideNext()"
            class="scale-0 bg-white hover:bg-yellow hover:text-white w-8 h-10 lg:w-11 lg:h-11 flex-center shadow-swiper-btn rounded-full transition-300 max-lg:-translate-x-[-16px] max-lg:rounded-r-none absolute right-[300px] translate-x-1/2 top-1/2 -translate-y-1/2 z-[2]"
            :class="{ 'scale-100': !isEnd }"
          >
            <span class="icon-angle-right text-xl lg:text-2xl"></span>
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="bg-gradient-to-l from-gray-1 to-transparent w-full z-10 flex-center mt-[82px]"></div> -->
  </div>
</template>

<script setup>
const swiperOrganizations = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)

const onSwiper = (swiper) => {
  swiperOrganizations.value = swiper
}

const onSlideChange = (swiper) => {
  isBeginning.value = swiper.isBeginning
  isEnd.value = swiper.isEnd
}
</script>

<style>
.swiper-overlay,
.swiper-overlay-left {
  background: linear-gradient(90deg, #f3f6fc 30%, rgba(243, 246, 252, 0.7) 80%, rgba(243, 246, 252, 0) 100%);
}

.swiper-overlay-right {
  background: linear-gradient(90deg, #f3f6fc 30%, rgba(243, 246, 252, 0.7) 80%, rgba(243, 246, 252, 0) 100%);
}
</style>
