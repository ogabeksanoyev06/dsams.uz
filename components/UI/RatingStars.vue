<template>
  <div class="flex gap-1">
    <svg v-for="star in 5" :key="star" class="duration-200" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path
        d="M9.65327 2.84L10.8266 5.18667C10.9866 5.51334 11.4133 5.82667 11.7733 5.88667L13.8999 6.24C15.2599 6.46667 15.5799 7.45334 14.5999 8.42667L12.9466 10.08C12.6666 10.36 12.5133 10.9 12.5999 11.2867L13.0733 13.3333C13.4466 14.9533 12.5866 15.58 11.1533 14.7333L9.15994 13.5533C8.79994 13.34 8.20661 13.34 7.83994 13.5533L5.84661 14.7333C4.41994 15.58 3.55327 14.9467 3.92661 13.3333L4.39994 11.2867C4.48661 10.9 4.33327 10.36 4.05327 10.08L2.39994 8.42667C1.42661 7.45334 1.73994 6.46667 3.09994 6.24L5.22661 5.88667C5.57994 5.82667 6.00661 5.51334 6.16661 5.18667L7.33994 2.84C7.97994 1.56667 9.01994 1.56667 9.65327 2.84Z"
        :style="{ fill: getStarColor(star) }"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

// Yulduz ranglarini olish uchun funksiya
const getStarColor = (star) => {
  if (star <= props.modelValue) {
    // modelValue dan kichik yoki teng bo'lsa ranglar
    switch (props.modelValue) {
      case 1:
        return '#F87171' // Qizil
      case 2:
        return '#FBBF24' // Amber
      case 3:
        return '#F5C502' // Sariq
      case 4:
        return '#4ADE80' // Yashil
      case 5:
        return '#34D399' // Emerald
      default:
        return '#C1C7D2' // Default gray
    }
  }
  return '#C1C7D2' // Default gray for unselected stars
}
</script>

<style scoped></style>
