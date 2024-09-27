<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4 max-lg:flex-col-reverse lg:flex-row">
      <div class="col-span-12 lg:col-span-5 flex flex-col gap-2 bg-white border border-gray-1 rounded-xl shadow-card-2 p-4">
        <h3 class="text-xl sm:text-2xl font-bold">Biz haqimizda</h3>
        <p class="text-sm sm:text-base text-gray-5 mb-6">
          Dsam.uz — bu zamonaviy, qulay va ishonchli platforma bo‘lib, sizga keng imkoniyatlar dunyosini taqdim etadi. Bizning asosiy maqsadimiz — foydalanuvchilarimizga samarali xizmat ko'rsatish va ularning ehtiyojlarini qondirish. Dsam.uz orqali
          siz qulay xizmatlar va innovatsion yechimlarni topasiz. Platformamiz sizning talablaringizni inobatga olgan holda, zamon bilan hamnafas tarzda rivojlanmoqda
        </p>
        <UIButton class="hover:shadow-yellow-2 text-base sm:w-[137px] mt-auto">
          Batafsil
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M14.9299 5.92993L20.9999 11.9999L14.9299 18.0699" stroke="#011432" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12H20.83" stroke="#011432" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </UIButton>
      </div>
      <div class="col-span-12 lg:col-span-7 bg-white border border-gray-1 rounded-xl shadow-card-2 w-full h-[300px] lg:h-[500px] overflow-hidden relative">
        <img src="/assets/images/image.png" alt="" class="w-full h-full object-cover rounded-xl" />
        <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <button class="flex-center w-10 h-10 md:w-16 md:h-16 lg:w-[104px] lg:h-[104px] bg-white/20 backdrop-blur-[10px] rounded-full">
            <span class="icon-play text-xl md:text-2xl lg:text-[64px]"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
