<script setup>
defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const form = reactive({})
</script>

<template>
  <UIModal title="Ma'lumotlar" :model-value @update:model-value="emit('update:modelValue', $event)" body-class="lg:!max-w-[450px]">
    <div class="p-5">
      <div class="flex flex-col gap-4">
        <FormGroup label="F.I.SH" for-id="name">
          <FormInput disabled placeholder="Sanoyev Odiljon Otabek o'g'li" id="name" />
        </FormGroup>
        <FormGroup label="Telefon raqami" for-id="phone">
          <FormInput disabled id="phone" v-model="form.phone" placeholder="+998 93 081 91 40" type="email" />
        </FormGroup>
        <FormGroup label="Email" for-id="email">
          <FormInput disabled id="email" v-model="form.email" placeholder="ogabeksanoyev06@gmail.com" type="email" />
        </FormGroup>
        <FormGroup label="Lavozim" for-id="father_name">
          <FormInput disabled placeholder="Direktor" id="father_name" />
        </FormGroup>
      </div>
      <UIButton wrapperClass="w-full mt-5" variant="secondary"> Yopish </UIButton>
    </div>
  </UIModal>
</template>
