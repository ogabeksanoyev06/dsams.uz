<template>
  <div>
    <UIBreadcrumb :breadcrumb />
    <div class="container py-8">
      <h1 class="font-bold text-xl sm:text-2xl mb-2">IT va tegishli texnologiyalar</h1>
      <p class="sm:text-base text-gray-4">
        Ma'lumotlar, axborot texnologiyalari va kommunikatsiyalar har qanday zamonaviy tashkilot yoki biznesning asosidir. Standartlar sizning IT-tizimlaringiz, texnik infratuzilmangiz va jarayonlaringiz xavfsiz, samarali va eng yaxshi amaliyotga mos
        kelishini ta'minlaydi.
      </p>
      <div class="mt-10">
        <h1 class="font-bold text-xl sm:text-2xl mb-4">Standartlar</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="flex flex-col bg-white border border-gray-1 shadow-card hover:shadow-card-2 rounded-xl overflow-hidden group" v-for="key in 10" :key>
            <div class="flex-1 p-4">
              <p class="mb-2">Standart</p>
              <a class="text-xl leading-130 font-medium text-yellow hover:underline" href="">ISO/IEC 20000-1: 2018s</a>
              <h5 class="text-xl leading-130 font-medium">Axborot texnologiyalari</h5>
              <h6 class="text-base font-medium leading-130 mt-2">Xizmatni boshqarish</h6>
              <p class="text-gray-4 text-base font-normal leading-130 mt-2">Bulutli xizmatlar uchun ISO/IEC 27002 asosidagi axborot xavfsizligini boshqarish amaliyoti kodeksi</p>
            </div>
            <div class="bg-gray-1 px-4 py-2 text-gray-4">Chop etilgan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const breadcrumb = [
  {
    title: 'Sektorlar',
    link: '/profile',
  },
  {
    title: 'Sektorlar',
    link: '/profile',
  },
]
</script>
