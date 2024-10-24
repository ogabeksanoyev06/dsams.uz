<script setup>
defineProps({
  title: {
    type: String,
    default: 'Sektorlar',
  },
  link: {
    type: String,
    default: '/',
  },
  linkTitle: {
    type: String,
    default: 'Barcha sektorlar',
  },
})

const localePath = useLocalePath()
</script>

<template>
  <div class="flex items-center justify-between mb-4 sm:mb-5">
    <h3 class="text-xl sm:text-2xl font-bold">{{ title }}</h3>
    <NuxtLink :to="localePath(link)" class="flex items-center justify-center font-medium gap-1 group">
      <span class="text-gray-5 transition-300 group-hover:text-blue font-medium text-base sm:text-sm">{{ linkTitle }}</span>
      <span class="icon-angle-right text-base text-gray-5 transition-300 group-hover:text-blue group-hover:translate-x-1"></span>
    </NuxtLink>
  </div>
</template>
