<template>
  <UiDropdownMenu v-model:open="open">
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="secondary" size="sm" class="max-sm:gap-1 max-sm:bg-transparent max-sm:p-0">
        <img :src="currentLanguage.flag" class="h-5 w-5 flex-shrink-0 rounded-full" />
        <div class="flex items-center gap-0.5">
          <span class="text-sm capitalize max-sm:hidden">{{ currentLanguage.code }}</span>
          <Icon name="lucide:chevron-down" class="transition-300 h-4 w-4" :class="{ 'rotate-180': open }" />
        </div>
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end" class="space-y-1">
      <UiDropdownMenuItem v-for="(item, key) in languagesList" :key class="cursor-pointer gap-1.5 py-1.5" @click="onChangeLocale(item.code)" :class="item.code === currentLanguage.code ? 'bg-muted' : ''">
        <img :src="item.flag" alt="" class="h-4 w-4 flex-shrink-0 rounded-full" />
        <span>{{ item.name }}</span>
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

<script setup>
  import { useLanguageSwitcher } from "@/composables/useLanguageSwitcher";

  const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher();

  const open = ref(false);

  const onChangeLocale = (code) => {
    if (currentLanguage.value?.code !== code) {
      changeLocale(code);
    }
  };
</script>
