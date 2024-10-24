<template>
  <div class="container">
    <SectionTitle title="Top standartlar" link="/standards" linkTitle="Barcha standartlar" />
    <div class="flex flex-col gap-2 bg-white shadow-card-2 border border-gray-1 rounded-xl p-4 mb-4">
      <h3 class="text-lg sm:text-2xl xl:leading-140 font-bold">ISO: Xalqaro standartlashtirish tashkiloti</h3>
      <p class="text-sm sm:text-base text-gray-5">
        ISO mustaqil, nodavlat xalqaro tashkilotdir. U ishlarni bajarishning eng yaxshi usullarini kelishish uchun global ekspertlarni birlashtiradi. Iqlim o'zgarishi va sog'liqni saqlashdan tortib , sifat menejmenti va sun'iy intellektgacha ,
        bizning vazifamiz hayotni hamma uchun, hamma joyda oson, xavfsiz va yaxshiroq qilishdir
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CardStandart v-for="item in 4" />
    </div>
  </div>
</template>

<script setup></script>
