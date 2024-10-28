<template>
  <div>
    <ul class="notifications">
      <li class="mb-2" v-for="key in 5" :key @click="isModal = true">
        <div class="text-gray-500 text-sm font-normal mb-1.5">01.08.2024</div>
        <div class="flex flex-col gap-2">
          <div class="p-3 bg-gray-1 rounded-xl flex gap-2 notification-hover-card transition-300 cursor-pointer">
            <div class="w-8 h-8 shrink-0">
              <div class="w-full h-full rounded-full flex-center bg-yellow/20">
                <i class="icon-notification text-xl text-yellow"></i>
              </div>
            </div>
            <div>
              <div class="flex-y-center">
                <p class="text-base leading-130 text-dark font-medium">IT va tegishli texnologiyalar</p>
              </div>
              <div class="text-sm leading-130 text-gray-700 mt-1">
                Ma'lumotlar, axborot texnologiyalari va kommunikatsiyalar har qanday zamonaviy tashkilot yoki biznesning asosidir. Standartlar sizning IT-tizimlaringiz, texnik infratuzilmangiz va jarayonlaringiz xavfsiz, samarali va eng yaxshi
                amaliyotga mos kelishini ta'minlaydi.
              </div>
              <time class="mt-2 text-xs leading-130 text-gray">16:39</time>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ModalProfileNotification noHeader v-model="isModal" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'profile',
})

const isModal = ref(false)
</script>
