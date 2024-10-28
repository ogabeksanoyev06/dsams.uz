<template>
  <div class="bg-gray-1 border border-transparent transition-300 focus-within:!bg-white overflow-hidden focus-within:border-blue flex items-center rounded-lg" :class="[wrapperClass, { '!border-danger': error }]">
    <div class="pl-3 pointer-events-none flex-center cursor-pointer transition-300" v-if="prefix">
      <slot name="prefix"> </slot>
    </div>
    <input
      v-bind="{
        type,
        minlength,
        maxlength,
        max,
        min,
        disabled,
        placeholder,
        readonly,
        autocomplete,
        id,
      }"
      ref="Input"
      class="w-full h-full sm:text-base text-sm p-3 text-dark bg-transparent placeholder:text-dark placeholder:sm:text-base outline-none disabled:cursor-not-allowed disabled:opacity-50"
      :value="modelValue"
      :class="[inputClass]"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="handleFocus"
    />
    <div class="pr-3 h-max flex-center cursor-pointer transition-300 hover:text-yellow" v-if="suffix">
      <slot name="suffix"> </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: String,
  label: String,
  modelValue: [String, Number],
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  focus: { type: Boolean, default: false },
  maxlength: { type: Number, default: 99 },
  minlength: Number,
  max: Number,
  min: Number,
  inputClass: [String, Array],
  wrapperClass: { type: [String, Array], default: '' },
  prefix: { type: Boolean, default: false }, // Prefix uchun sinf
  suffix: { type: Boolean, default: false }, // Suffix uchun sinf
  autocomplete: { type: String, default: 'new-password' },
  id: String,
  readonly: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'blur', 'focusout', 'focus', 'enter'])

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}

const handleEnter = () => {
  emit('enter')
}

const Input = ref()
defineExpose({ Input })

const handleFocus = () => {
  emit('focus')
}

watch(
  () => props.focus,
  (value) => {
    if (value) {
      Input.value.focus()
    }
  },
  { deep: true, immediate: true },
)
</script>
