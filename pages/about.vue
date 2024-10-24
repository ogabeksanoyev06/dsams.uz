<template>
  <div>
    <UIBreadcrumb :breadcrumb />
    <div class="py-8 container">
      <h1 class="font-bold text-xl sm:text-2xl mb-8">Biz haqimizda</h1>
      <div class="rounded-xl bg-white border border-gray-1 p-2 sm:p-8">
        <h3 class="text-xl font-bold mb-2">Biz haqimizda</h3>
        <p class="text-sm sm:text-lg text-gray-5 sm:leading-[28px]">
          Dsam.uz — bu zamonaviy, qulay va ishonchli platforma bo‘lib, sizga keng imkoniyatlar dunyosini taqdim etadi. Bizning asosiy maqsadimiz — foydalanuvchilarimizga samarali xizmat ko'rsatish va ularning ehtiyojlarini qondirish. Dsam.uz orqali
          siz qulay xizmatlar va innovatsion yechimlarni topasiz. Platformamiz sizning talablaringizni inobatga olgan holda, zamon bilan hamnafas tarzda rivojlanmoqda
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const breadcrumb = [
  {
    title: 'Biz haqimizda',
    link: '/profile',
  },
]
const search = ref('')
</script>
