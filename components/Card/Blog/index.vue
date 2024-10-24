<template>
  <NuxtLink :to="localePath('/blog/slug')" class="relative flex flex-col rounded-xl bg-white overflow-hidden cursor-pointer transition-300 group shadow-card-2 hover:shadow-blog h-full">
    <div class="h-[200px] shrink-0">
      <img src="/assets/images/blog.png" alt="" class="object-cover w-full h-full object-top" />
    </div>
    <div class="p-4 rounded-xl h-full flex flex-col">
      <div class="flex-y-center space-x-1">
        <span class="icon-calendar text-base text-gray-100 h-4"> </span>
        <span class="text-gray text-sm font-medium leading-130">28 August, 2024</span>
      </div>
      <p class="text-blue-800 text-base font-medium leading-130 mt-2 line-clamp-3">Toshkentda ish va uchrashuvlar uchun qulay muhitga ega qahvaxonalar</p>
    </div>
  </NuxtLink>
</template>

<script setup>
const localePath = useLocalePath()
</script>
