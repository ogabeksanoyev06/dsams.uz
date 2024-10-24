<script setup>
defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const localePath = useLocalePath()
</script>

<template>
  <UIModal title="Ariza beruvchining majburiyatlari" disable-outer-close :model-value @update:model-value="emit('update:modelValue', $event)" body-class="lg:!max-w-[600px]">
    <div class="p-5">
      <img src="https://cdn.commeta.uz/static/review/static/front/images/svg/alert-warning.svg" alt="ask-auth" class="mx-auto w-[128px] mb-4" />
      <ul class="grid gap-2">
        <li class="text-gray-4 text-sm">1. Ariza beruvchi ushbu ariza deklaratsiyasida ko'rsatilgan ma'lumotlarning to'g'riligini kafolatlaydi.</li>
        <li class="text-gray-4 text-sm">
          2. Ariza beruvchi RR sertifikatlash shartlari bilan tanishligini tasdiqlaydi va ularga rioya qilish majburiyatini oladi. (Sertifikatlash shartlari RR rasmiy Internet saytida joylashgan:
          <a href="https://www.rusregister.ru/conditions.shtml" class="text-blue" target="_blank">www.rusregister.ru/conditions.shtml </a>).
        </li>
        <li class="text-gray-4 text-sm">3. Ariza beruvchiga xabar qilinadi va menejment tizimining muvofiqlik sertifikati berilishiga e’tiroz bildirmaydi.</li>
        <li class="text-gray-4 text-sm">4. Ushbu deklaratsiya-ariza taqdim etilgan kundan boshlab 12 oy davomida amal qiladi.</li>
      </ul>
      <div class="flex-y-center gap-3 mt-6">
        <UIButton text="Bekor qilish" variant="outline" wrapper-class="sm:w-1/2" @click="emit('update:modelValue', false)" />
        <UIButton text="Davom etish" wrapper-class="sm:w-1/2" @click="emit('update:modelValue', false), $router.push(localePath('/application'))" />
      </div>
    </div>
  </UIModal>
</template>
