<script setup>
defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <UIModal :model-value @update:model-value="emit('update:modelValue', $event)" body-class="lg:!max-w-[450px]">
    <div class="p-5">
      <p class="text-xl leading-130 font-semibold text-dark">IT va tegishli texnologiyalar</p>
      <div class="content text-base leading-130 text-dark mt-3">
        <img src="/assets/images/image.png" class="mb-4" />
        Ma'lumotlar, axborot texnologiyalari va kommunikatsiyalar har qanday zamonaviy tashkilot yoki biznesning asosidir. Standartlar sizning IT-tizimlaringiz, texnik infratuzilmangiz va jarayonlaringiz xavfsiz, samarali va eng yaxshi amaliyotga mos
        kelishini ta'minlaydi.
      </div>
      <UIButton wrapperClass="w-full mt-5" variant="secondary"> Yopish </UIButton>
    </div>
  </UIModal>
</template>
