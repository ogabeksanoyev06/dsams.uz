<template>
  <div class="flex flex-col gap-2 p-3 border-b border-gray-6">
    <div class="flex-center-between">
      <p class="text-sm leading-130 font-medium">Reyting</p>
    </div>
    <div class="flex-center gap-1 py-1.5 w-full rounded-lg">
      <div v-for="rate in ratings" :key="rate.value" @click="toggleRating(rate.value)" :class="['flex-center gap-1 py-1.5 w-full rounded-lg cursor-pointer transition-300', isActiveRating(rate.value) ? rate.activeClass : rate.defaultClass]">
        <i :class="['icon-star transition-300 block ', isActiveRating(rate.value) ? rate.activeIconColor : rate.iconColor]"></i>
        <p :class="['text-sm leading-130 font-semibold transition-300', isActiveRating(rate.value) ? 'text-white' : 'text-dark']">{{ rate.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const ratings = ref([
  { value: 1, label: '1+', defaultClass: 'bg-red-500 bg-opacity-10 hover:border-red-500', activeClass: 'bg-red-500 !bg-opacity-100 border-red-500', iconColor: 'text-red-500', activeIconColor: 'text-red-50 !text-white' },
  { value: 2, label: '2+', defaultClass: 'bg-red-500 bg-opacity-10 hover:border-red-500', activeClass: 'bg-red-500 !bg-opacity-100 border-red-500', iconColor: 'text-red-500', activeIconColor: 'text-red-50 !text-white' },
  { value: 3, label: '3+', defaultClass: 'bg-orange-500 bg-opacity-10 hover:border-orange-500', activeClass: 'bg-orange-500 !bg-opacity-100 border-orange-500', iconColor: 'text-orange-500', activeIconColor: 'text-orange-50' },
  { value: 4, label: '4+', defaultClass: 'bg-green-500 bg-opacity-10 hover:border-green-500', activeClass: 'bg-green-500 !bg-opacity-100 border-green-500', iconColor: 'text-green-500', activeIconColor: 'text-green-50' },
  { value: 4.5, label: '4.5+', defaultClass: 'bg-teal-500 bg-opacity-10 hover:border-teal-500', activeClass: 'bg-teal-500 !bg-opacity-100 border-teal-500', iconColor: 'text-teal-500', activeIconColor: '!text-white' },
])

const route = useRoute()
const router = useRouter()

const isActiveRating = (value) => {
  const ratingsInQuery = route.query.ball
  const ratingsArray = ratingsInQuery ? ratingsInQuery.split(',').map(Number) : []
  return ratingsArray.includes(value)
}

const toggleRating = (value) => {
  const currentRatings = route.query.ball ? route.query.ball.split(',') : []

  const index = currentRatings.indexOf(String(value))

  if (index !== -1) {
    currentRatings.splice(index, 1)
  } else {
    currentRatings.push(String(value))
  }

  router.push({
    name: route.name,
    query: { ...route.query, ball: currentRatings.length ? currentRatings.join(',') : undefined },
  })
}
</script>

<style scoped></style>
