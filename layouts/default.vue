<script setup>
// import { useWindowScroll } from '@vueuse/core'

// const { y } = useWindowScroll()

// const route = useRoute()
// const dark = computed(() => y.value < 100 && route.name === 'index')
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader />
    <div class="flex-1 relative overflow-hidden">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
