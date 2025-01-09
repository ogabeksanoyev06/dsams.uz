<template>
  <main>
    <LayoutHeader />
    <section class="absolute-center absolute flex min-w-[308px] flex-col items-center justify-center">
      <div class="not_found relative z-0 flex flex-col items-center justify-center">
        <!-- <img src="/images/404/pattern.png" alt="Main pattern svg" /> -->
        <h1 class="text-blue absolute -bottom-[60px] z-10 text-center text-[120px] font-black">
          {{ error.statusCode }}
        </h1>
      </div>
      <div class="mx-auto mt-12 flex max-w-[580px] flex-col items-center justify-center">
        <p class="leading-140 text-gray-1 mb-8 text-center text-lg font-normal">
          {{ $t("404_description") }}
        </p>
        <div class="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <nuxt-link to="/">
            <UiButton class="h-[42px] min-w-[168px]"> Bosh sahifa </UiButton>
          </nuxt-link>
          <nuxt-link to="/about-us">
            <UiButton variant="secondary" class="border-gray-3 h-[42px] min-w-[168px] border"> Biz haqimizda </UiButton>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  defineProps({
    error: {
      type: Object,
      required: true,
      default: () => ({
        statusCode: 404,
        message: "Page not found",
      }),
    },
  });
</script>
