<template>
  <div class="flex-y-center gap-1">
    <label class="group inline-flex relative select-none" :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'" @click="handleChange">
      <!-- Checkbox input yashirilgan, faqat span bilan ishlatiladi -->
      <span
        class="shrink-0 duration-200 ease-in-out inline-block h-6 w-6 rounded bg-[#FAFAFB] border border-[#EBEAED] after:border-white peer-disabled:border-gray-100 peer-disabled:after:border-grey-100 after:absolute after:left-[9px] after:top-[5px] after:w-1.5 after:h-3 after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[45deg] after:opacity-0"
        :class="[
          {
            'border-red': error,
            'group-hover:border-blue': !disabled,
            '!border-primary !bg-primary after:opacity-100 after:rotate-180': checked,
          },
          checkboxStyles,
        ]"
      />
      <span class="ml-2 flex-y-center gap-1">
        <slot name="label">
          <span class="font-semibold letter-3 leading-130 text-dark text-sm" :class="labelStyles">
            {{ label }}
          </span>
        </slot>
      </span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number, Boolean],
  label: String,
  name: String,
  value: [String, Number, Boolean],
  disabled: Boolean,
  error: Boolean,
  labelStyles: String,
  checked: Boolean,
  checkboxStyles: String,
})

// hodisani jo'natish uchun `emit` funksiyasi
const emit = defineEmits(['update:modelValue'])

// Checkbox holatini o'zgartirish
const handleChange = () => {
  emit('update:modelValue', !props.checked)
}
</script>
