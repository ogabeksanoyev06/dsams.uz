<template>
  <div class="bg-muted/35">
    <div class="container py-10 lg:py-16">
      <p class="mb-3 font-semibold text-primary">dsams.uz</p>
      <h1 class="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:mb-6 lg:text-4xl xl:text-5xl">Menejment tizimlarini baholashning raqamli tizimi</h1>
      <p class="text-base lg:text-xl">Menejment jarayonlarini avtomatlashtirish va samaradorlikni oshirish uchun innovatsion yechim. Tizimlaringizni raqamli asr talablariga mos ravishda rivojlantiring!</p>
      <div
        title="Blog page on image"
        class="mt-10 hidden h-60 w-full items-end overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover drop-shadow lg:mt-20 lg:flex lg:h-[720px]"
      >
        <div class="w-full border-t border-white/10 bg-black/40 p-10 text-white backdrop-blur-2xl">
          <NuxtLink :to="localePath('/about')">
            <h2 class="mb-2 text-lg font-semibold lg:text-xl xl:text-2xl">Menejment tizimlarini baholashning raqamli tizimi</h2>
          </NuxtLink>
          <p>Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useAboutStore } from "@/stores/about.js";

  const aboutStore = useAboutStore();

  const { info } = storeToRefs(aboutStore);

  const localePath = useLocalePath();
</script>
