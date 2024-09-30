<script setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const route = useRoute()
const dark = computed(() => y.value > 30)
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader :dark />
    <div class="flex-1 relative overflow-hidden">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
