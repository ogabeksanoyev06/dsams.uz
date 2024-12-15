<template>
  <div class="container py-8">
    <p class="mb-3 font-semibold text-primary">dsams.uz</p>
    <h1 class="mb-4 text-xl font-semibold md:text-3xl lg:mb-6 lg:text-4xl xl:text-5xl">Menejment tizimlarini baholashning raqamli tizimi</h1>
    <p class="text-sm sm:text-lg lg:text-xl">Menejment jarayonlarini avtomatlashtirish va samaradorlikni oshirish uchun innovatsion yechim. Tizimlaringizni raqamli asr talablariga mos ravishda rivojlantiring!</p>
    <img src="/assets/images/blog.png" alt="about" class="mt-6 w-full rounded-xl" />
  </div>
</template>

<script setup>
  import { useAboutStore } from "@/stores/about.js";

  const aboutStore = useAboutStore();

  const { info } = storeToRefs(aboutStore);
</script>
