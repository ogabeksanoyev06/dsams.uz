<template>
  <div class="flex items-stretch relative">
    <div class="container shrink-0 relative z-0 pt-8">
      <div class="relative">
        <SectionTitle :link-title="'Barcha tashkilotlar'" :link="'/blog'" />
        <div class="overflow-hidden px-[300px] -mx-[300px] md:py-5 md:-my-5 relative z-0">
          <Swiper
            class="w-full !overflow-visible !py-5"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="[SwiperAutoplay]"
            :space-between="16"
            :slides-per-view="1"
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
            <SwiperSlide v-for="(review, i) in 10" :key="i" class="!h-auto">
              <NuxtLink to="/" class="relative flex flex-col rounded-2xl bg-white overflow-hidden cursor-pointer transition-300 group shadow-card-2 hover:shadow-blog h-full">
                <div class="h-[250px] shrink-0 aspect-[300/250]">
                  <div class="w-full h-full"><img alt="blog image" class="object-cover w-full h-full object-top" src="/assets/images/blog.png" /></div>
                </div>
                <div class="px-4 pb-4 pt-2 rounded-xl h-full flex flex-col">
                  <h3 class="text-base font-medium leading-140">ISO 9000 oilasi - Sifat menejmenti</h3>
                  <p class="text-gray-5 text-sm leading-140 mt-2 line-clamp-3">ISO 9000 standartlar oilasi tashkilotlarga mahsulot va xizmatlari sifatini yaxshilashga va doimiy ravishda mijozlarning talablarini qondirishga yordam beradi.</p>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-overlay-left absolute left-0 top-0 bottom-0 w-[300px] z-[1] pointer-events-none"></div>
          <div class="swiper-overlay-right absolute rotate-180 right-0 top-0 bottom-0 w-[300px] z-[1] pointer-events-none"></div>
          <button
            @click="swiperBlog.slidePrev()"
            class="scale-0 bg-white hover:bg-yellow hover:text-white w-8 h-10 lg:w-11 lg:h-11 flex-center shadow-swiper-btn rounded-full transition-300 max-lg:translate-x-[-16px] max-lg:rounded-l-none absolute left-[300px] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[2]"
            :class="{ 'scale-100': !isBeginning }"
          >
            <span class="icon-angle-left text-xl lg:text-2xl"></span>
          </button>
          <button
            @click="swiperBlog.slideNext()"
            class="scale-0 bg-white hover:bg-yellow hover:text-white w-8 h-10 lg:w-11 lg:h-11 flex-center shadow-swiper-btn rounded-full transition-300 max-lg:-translate-x-[-16px] max-lg:rounded-r-none absolute right-[300px] translate-x-1/2 top-1/2 -translate-y-1/2 z-[2]"
            :class="{ 'scale-100': !isEnd }"
          >
            <span class="icon-angle-right text-xl lg:text-2xl"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const swiperBlog = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)

const onSwiper = (swiper) => {
  swiperBlog.value = swiper
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
