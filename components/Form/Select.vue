<template>
  <div ref="select" class="relative" :class="wrapperStyles">
    <!--  SELECTED OPTION  -->
    <div class="bg-white rounded-lg px-3 py-2.5 cursor-pointer flex items-center justify-between gap-3" :class="[selectedOptionStyles, { '!border-danger': error }]" @click="toggleSelect(!showOptions)">
      <slot name="selectedOption" :value="value">
        <div class="flex-y-center gap-1.5">
          <slot name="prefix" />
          <div v-if="!value" class="text-gray-3 truncate text-base sm:text-sm leading-5 whitespace-nowrap" :class="placeholderClass">
            {{ placeholder }}
          </div>
          <slot v-else name="selectedOptionInner" :value="value">
            <div class="w-full text-base sm:text-sm leading-5 text-dark font-medium">
              {{ value[labelKey] || value }}
            </div>
          </slot>
        </div>
        <span class="transition-300" :class="{ 'rotate-180': showOptions }">
          <slot name="chevron">
            <svg class="transition-all duration-200 inline-block text-gray w-[18px] h-[18px]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9.32532L12 15.3253L18 9.32532" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </slot>
        </span>
      </slot>
    </div>

    <!--  OPTIONS  -->
    <Transition name="select">
      <div v-if="showOptions" :key="showOptions" class="absolute w-full bg-white border border-gray-200 rounded z-50 overflow-x-hidden max-h-[220px] scroll-style top-full translate-y-1">
        <slot name="options">
          <template v-if="options?.length">
            <div v-for="(option, idx) in options" :key="idx" class="transition-all duration-200 px-3 py-2.5 hover:bg-[#F2F2F2] cursor-pointer flex-center-between border-b border-[#D7D7D7] last:border-[0px] group" @click="onSelect(option)">
              <slot name="option" :option="option" :index="idx">
                <p class="text-base sm:text-sm leading-5 text-dark font-medium select-none" :class="{ 'font-medium': isActive(option) }">
                  {{ option[labelKey] }}
                </p>
              </slot>
              <i v-if="isActive(option)" class="icon-tick text-2xl text-blue block h-1" />
            </div>
          </template>
          <div v-else class="text-center py-2 text-sm text-dark">No data</div>
          <div v-if="infiniteScroll" ref="target" class="py-0.5 w-full" />
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  modelValue: { type: [String, Number, Object], default: undefined },
  error: { type: Boolean, default: false },
  options: { type: Array, required: true },
  labelKey: { type: String, default: 'name' },
  valueKey: { type: String, default: 'id' },
  selectedOptionStyles: { type: String, default: '' },
  placeholder: { type: String, default: undefined },
  infiniteScroll: { type: Boolean, default: false },
  searchText: { type: String, default: '' },
  noDataText: { type: String, default: 'no_search_data' },
  wrapperStyles: { type: String, default: '' },
  position: { type: String, default: 'bottom' },
  placeholderClass: { type: String, default: '' },
})

const emit = defineEmits(['on-toggle', 'on-select', 'update:modelValue', 'infinite-scroll'])

const showOptions = ref(false)
const target = ref(null)

function toggleSelect(newValue = showOptions.value) {
  showOptions.value = newValue
  emit('on-toggle', showOptions.value)
}

defineExpose({ toggleSelect })

function findOption(option) {
  return props.options?.find((o) => o === option || o[props.valueKey] === option)
}

const value = computed({
  get() {
    return findOption(props.modelValue)
  },
  set(newValue) {
    emit('update:modelValue', newValue?.[props.valueKey] ?? newValue)
  },
})

function onSelect(option) {
  value.value = option
  toggleSelect(false)
  emit('on-select', option)
}

const select = ref()
onClickOutside(select, () => toggleSelect(false))

function isActive(option) {
  return option === value.value || (value.value && value.value?.[props.valueKey] === option?.[props.valueKey]) || option?.[props.valueKey] === value.value
}
</script>
