<template>
  <UIDropdown
    :show="showDropdown"
    :head-class="[
      'flex items-center flex-shrink-0 gap-1 text-gray-5 cursor-pointer transition-300 bg-gray-1 hover:bg-[#CFD4D8]/50  p-[6px] rounded-lg',
      {
        '!bg-[#CFD4D8]/50': showDropdown,
      },
    ]"
    body-class="!w-[160px]"
    @toggle="handleDropdownToggle"
  >
    <template #head>
      <img src="/assets/svg/flags/uz.svg" alt="" class="w-5 h-5" />
      <span class="text-sm font-medium text-gray-5"> O'z </span>
    </template>
    <template #body>
      <div v-for="(lang, index) in languagesList" :key="index" class="w-full group border-b border-gray-6 last:border-b-0">
        <div class="flex items-center justify-between gap-2 py-1.5 px-2 cursor-pointer transition-300 hover:bg-gray-1" @click="onChangeLocale(lang?.code)">
          <div class="flex items-center gap-2">
            <img :src="lang.flag" :alt="lang.name" class="w-5 h-5" />
            <span class="text-left text-sm font-medium text-dark">
              {{ lang.name }}
            </span>
          </div>
        </div>
        <hr class="ml-2 w-full border-none h-px bg-white-100 group-last:hidden" />
      </div>
    </template>
  </UIDropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher'

const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()

const showDropdown = ref(false)

function handleDropdownToggle(val) {
  showDropdown.value = val
}

function onChangeLocale(code) {
  if (currentLanguage.value?.code !== code) {
    showDropdown.value = false
    changeLocale(code)
  }
}
</script>
