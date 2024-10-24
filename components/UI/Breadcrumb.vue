<template>
  <div class="bg-white py-3 hidden-on-print overflow-x-hidden">
    <div class="container flex items-center gap-3 md:overflow-hidden">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-1.5 text-blue-800 leading-130 text-sm transition-300 hover:text-blue group">
        <span class="icon-home text-base leading-4 text-blue-800 transition-300 group-hover:text-blue"></span>
        <p class="transition-300 group-hover:text-blue leading-4">Asosiy</p>
      </NuxtLink>
      <div v-for="(item, index) in breadcrumb" :key="index" class="flex items-center gap-3 last:max-w-[150px] sm:last:max-w-[300px] overflow-hidden group shrink-0">
        <i class="icon-angle-right text-gray-2 text-sm leading-[14px]" />

        <NuxtLink
          :to="localePath(item?.link)"
          :class="{
            'pointer-events-none !text-gray-3': index === breadcrumb?.length - 1,
          }"
          class="transition-300 flex cursor-pointer items-center text-blue-800 leading-4 text-sm min-w-max group-last:min-w-[100px] sm:group-last:min-w-[200px] breadcrumb-menu !line-clamp-1 hover:text-blue"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  breadcrumb: {
    type: Array,
    required: true,
  },
})

const localePath = useLocalePath()
</script>
