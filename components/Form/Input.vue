<template>
  <div class="bg-gray-100 border border-transparent transition-300 focus-within:border-blue flex items-center rounded-lg" :class="{ '!border-danger': error }">
    <!-- Prefix Slot -->
    <slot name="prefix">
      <span :class="prefixClass" v-if="prefixClass">Prefix</span>
    </slot>
    <!-- Input -->
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
      class="w-full text-base sm:text-sm leading-5 text-dark font-medium bg-transparent outline-none placeholder:text-gray-200 disabled:text-gray"
      :value="modelValue"
      :class="[inputClass]"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="handleFocus"
    />
    <!-- Suffix Slot -->
    <slot name="suffix">
      <span :class="suffixClass" v-if="suffixClass">Suffix</span>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: String,
  modelValue: [String, Number],
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  focus: { type: Boolean, default: false },
  maxlength: { type: Number, default: 99 },
  minlength: Number,
  max: Number,
  min: Number,
  inputClass: [String, Array],
  prefixClass: String, // Prefix uchun sinf
  suffixClass: String, // Suffix uchun sinf
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
