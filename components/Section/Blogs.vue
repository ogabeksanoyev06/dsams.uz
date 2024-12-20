<template>
  <div class="overflow-hidden py-10">
    <div class="container">
      <div class="mb-5 flex flex-wrap items-center justify-between gap-2 md:mb-10">
        <h2 class="text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">{{ t("blog") }}</h2>
        <NuxtLink to="/blogs">
          <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-right" class="transition-300 h-auto !bg-transparent !p-0 text-foreground hover:text-primary"> {{ t("allBlogs") }} </UiButton>
        </NuxtLink>
      </div>
      <Transition name="fade" mode="out-in">
        <template v-if="loading">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardBlogLoading v-for="key in 4" :key />
          </div>
        </template>
        <template v-else>
          <div class="relative z-0 -mx-[300px] overflow-hidden px-[300px] md:-my-5 md:py-5">
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
                  slidesPerView: 3.2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }"
            >
              <SwiperSlide v-for="(item, key) in blogs" :key class="!h-auto">
                <CardBlog :item />
              </SwiperSlide>
            </Swiper>
            <div class="swiper-overlay-left pointer-events-none absolute bottom-0 left-0 top-0 z-[1] w-[300px]"></div>
            <div class="swiper-overlay-right pointer-events-none absolute bottom-0 right-0 top-0 z-[1] w-[300px] rotate-180"></div>
            <button
              @click="swiperBlog.slidePrev()"
              class="flex-center shadow-swiper-btn transition-300 absolute left-[300px] top-1/2 z-[2] h-10 w-8 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-background hover:bg-primary hover:text-white max-lg:translate-x-[-16px] max-lg:rounded-l-none lg:h-11 lg:w-11"
              :class="{ 'scale-100': !isBeginning }"
            >
              <Icon name="lucide:arrow-left" class="text-lg" />
            </button>
            <button
              @click="swiperBlog.slideNext()"
              class="flex-center shadow-swiper-btn transition-300 absolute right-[300px] top-1/2 z-[2] h-10 w-8 -translate-y-1/2 translate-x-1/2 scale-0 rounded-full bg-background hover:bg-primary hover:text-white max-lg:-translate-x-[-16px] max-lg:rounded-r-none lg:h-11 lg:w-11"
              :class="{ 'scale-100': !isEnd }"
            >
              <Icon name="lucide:arrow-right" class="text-lg" />
            </button>
          </div>
        </template>
      </Transition>
    </div>
  </div>
</template>

<script setup>
  import { useBlogsStore } from "@/stores/blogs.js";
  import { useI18n } from "vue-i18n";

  const blogStore = useBlogsStore();

  const { getBlogs } = blogStore;
  const { blogs } = storeToRefs(blogStore);

  const swiperBlog = ref(null);
  const isBeginning = ref(true);
  const isEnd = ref(false);

  const onSwiper = (swiper) => {
    swiperBlog.value = swiper;
  };

  const onSlideChange = (swiper) => {
    isBeginning.value = swiper.isBeginning;
    isEnd.value = swiper.isEnd;
  };

  const { locale, t } = useI18n();
  const loading = ref(true);

  onMounted(async () => {
    try {
      await getBlogs({ lang: locale.value, limit: 9, page: 1 });
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  });
</script>

<style>
  /* .swiper-overlay,
  .swiper-overlay-left {
    background: linear-gradient(90deg, #fff 30%, rgba(243, 246, 252, 0.5) 80%, rgba(243, 246, 252, 0) 100%);
  }

  .swiper-overlay-right {
    background: linear-gradient(90deg, #fff 30%, rgba(243, 246, 252, 0.5) 80%, rgba(243, 246, 252, 0) 100%);
  } */
</style>
