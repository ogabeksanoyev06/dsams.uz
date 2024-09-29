<template>
  <textarea
    v-bind="{ rows, cols, id, placeholder, maxlength }"
    :value="modelValue"
    class="resize-y w-full !bg-gray-100 border border-transparent rounded-lg py-2.5 px-3 placeholder:text-gray text-base transition-300 sm:text-sm leading-5 text-dark font-medium bg-transparent outline-none placeholder:text-gray-200 disabled:text-gray"
    :class="{ '!border-danger': error }"
    @input="handleInput"
  ></textarea>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number, Object],
  placeholder: String,
  cols: [Number, String],
  rows: [Number, String],
  id: String,
  error: Boolean,
  maxlength: [Number, String],
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
