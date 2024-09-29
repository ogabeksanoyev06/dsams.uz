<template>
  <div class="relative flex overflow-x-scroll invisible-scroll">
    <div :class="activeClass" class="absolute h-full rounded-lg bg-[#ECECED] -translate-y-1/2 top-1/2 transition-all duration-300" :style="{ width: `${active.width}px`, left: `${active.left}px` }"></div>
    <button
      v-for="(tab, idx) in list"
      :id="`item-${randomNumber}_${tab.id}`"
      :key="idx"
      class="transition-300 text-lg leading-130 z-10 px-4 py-3 whitespace-nowrap"
      :class="[itemClass, modelValue === tab.id ? `${activeItemsClass ?? ''} font-bold text-dark` : 'font-semibold text-[#6E6E6E]']"
      @click="pick(tab.id, $event)"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: null },
  list: { type: Array, required: true },
  itemClass: { type: String, default: '' },
  activeClass: { type: String, default: '' },
  activeItemsClass: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const randomNumber = ref(0)
const active = ref({ left: 0, width: 0 })

const pick = (tab, event) => {
  const target = event.target
  active.value = {
    left: target.offsetLeft,
    width: target.offsetWidth,
  }
  emit('update:modelValue', tab)
}

onMounted(() => {
  randomNumber.value = Math.floor(Math.random() * 101)
  setTimeout(() => {
    const item = document.getElementById(`item-${randomNumber.value}_${props.modelValue}`)
    if (item) pick(props.modelValue, { target: item })
  }, 300)
})
</script>

<style>
/* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
.invisible-scroll {
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* For smooth scrolling */
}

.invisible-scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Hide scrollbar for Firefox */
.invisible-scroll {
  overflow: auto;
  scrollbar-width: none; /* Hide scrollbar */
  -ms-overflow-style: none; /* Hide scrollbar in IE 10+ */
}

.invisible-scroll::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Firefox */
}
</style>
