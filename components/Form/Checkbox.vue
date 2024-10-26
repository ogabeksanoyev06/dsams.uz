<template>
  <div class="flex-y-center">
    <label class="group inline-flex relative select-none" :class="[disabled ? 'cursor-not-allowed' : 'cursor-pointer', wrapperClass]" @click="handleChange">
      <span
        class="relative shrink-0 duration-200 ease-in-out inline-block h-6 w-6 rounded bg-gray-6 border border-gray-3 after:border-white peer-disabled:border-gray-100 peer-disabled:after:border-grey-100 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 group-hover:border-yellow"
        :class="[
          {
            'border-red': error,
            'group-hover:border-yellow': !disabled,
            '!border-yellow !bg-yellow': checked || indeterminate,
            'after:w-2 after:h-3 after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[45deg]  after:opacity-100': checked && !indeterminate,
            'after:w-2.5 after:h-[2px] after:bg-white after:opacity-100': indeterminate,
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
  indeterminate: Boolean,
  checkboxStyles: String,
  wrapperClass: { type: [String, Array], default: '' },
})

const emit = defineEmits(['update:modelValue'])

const handleChange = () => {
  emit('update:modelValue', !props.checked)
}
</script>
