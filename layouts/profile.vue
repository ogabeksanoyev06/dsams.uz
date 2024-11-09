<script setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const route = useRoute()
const localePath = useLocalePath()
const dark = computed(() => y.value > 30)
const tabList = [
  {
    name: 'Bosh exportlar',
    id: 0,
  },
  {
    name: 'Exportlar',
    id: 1,
  },
  {
    name: 'Exportlar',
    id: 1,
  },
  {
    name: 'Exportlar',
    id: 1,
  },
  {
    name: 'Exportlar',
    id: 1,
  },
]
const breadcrumb = [
  {
    title: 'Mening ma`lumotlarim',
    link: '/application',
  },
]

const tab = ref(tabList[0].id)

const changeTab = (id) => {
  tab.value = id
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader :dark />
    <UIBreadcrumb :breadcrumb="breadcrumb" />
    <div class="container flex-1 relative">
      <UITab :model-value="tab" :list="tabList" @update:model-value="changeTab" class="lg:hidden" />
      <div class="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-6 mt-8 items-start">
        <aside class="sticky h-[calc(100vh-150px)] top-24 hidden lg:block">
          <!-- <div class="flex flex-col items-center justify-center gap-5 bg-white border border-gray-1 shadow-card-2 rounded-[20px] overflow-hidden mb-6 pt-5 pb-12">
            <div class="w-[88px] h-[88px] shrink-0 rounded-full border border-white-100 relative overflow-hidden flex-center cursor-pointer group">
              <img alt="profile-avatar" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-semibold">Odiljon Sanoyev</h3>
              <a href="#" class="flex items-center gap-1 text-sm text-gray-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14.6473 12.22C14.6473 12.46 14.594 12.7067 14.4807 12.9467C14.3673 13.1867 14.2207 13.4133 14.0273 13.6267C13.7007 13.9867 13.3407 14.2467 12.934 14.4133C12.534 14.58 12.1007 14.6667 11.634 14.6667C10.954 14.6667 10.2273 14.5067 9.46065 14.18C8.69398 13.8533 7.92732 13.4133 7.16732 12.86C6.40065 12.3 5.67398 11.68 4.98065 10.9933C4.29398 10.3 3.67398 9.57334 3.12065 8.81334C2.57398 8.05334 2.13398 7.29334 1.81398 6.54C1.49398 5.78 1.33398 5.05334 1.33398 4.36C1.33398 3.90667 1.41398 3.47334 1.57398 3.07334C1.73398 2.66667 1.98732 2.29334 2.34065 1.96C2.76732 1.54 3.23398 1.33334 3.72732 1.33334C3.91398 1.33334 4.10065 1.37334 4.26732 1.45334C4.44065 1.53334 4.59398 1.65334 4.71398 1.82667L6.26065 4.00667C6.38065 4.17334 6.46732 4.32667 6.52732 4.47334C6.58732 4.61334 6.62065 4.75334 6.62065 4.88C6.62065 5.04 6.57398 5.2 6.48065 5.35334C6.39398 5.50667 6.26732 5.66667 6.10732 5.82667L5.60065 6.35334C5.52732 6.42667 5.49398 6.51334 5.49398 6.62C5.49398 6.67334 5.50065 6.72 5.51398 6.77334C5.53398 6.82667 5.55398 6.86667 5.56732 6.90667C5.68732 7.12667 5.89398 7.41334 6.18732 7.76C6.48732 8.10667 6.80732 8.46 7.15398 8.81334C7.51398 9.16667 7.86065 9.49334 8.21398 9.79334C8.56065 10.0867 8.84732 10.2867 9.07398 10.4067C9.10732 10.42 9.14732 10.44 9.19398 10.46C9.24732 10.48 9.30065 10.4867 9.36065 10.4867C9.47398 10.4867 9.56065 10.4467 9.63398 10.3733L10.1407 9.87334C10.3073 9.70667 10.4673 9.58 10.6207 9.5C10.774 9.40667 10.9273 9.36 11.094 9.36C11.2207 9.36 11.354 9.38667 11.5007 9.44667C11.6473 9.50667 11.8007 9.59334 11.9673 9.70667L14.174 11.2733C14.3473 11.3933 14.4673 11.5333 14.5407 11.7C14.6073 11.8667 14.6473 12.0333 14.6473 12.22Z"
                    stroke="#4B5970"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
                <span>+998 (93) 472 93 35</span>
              </a>
            </div>
          </div> -->
          <div class="bg-white border border-gray-1 shadow-card-2 rounded-[20px] overflow-hidden">
            <NuxtLink
              :to="localePath('/my-profile')"
              class="[&.router-link-exact-active]:!bg-gray-1 [&.router-link-exact-active]:!text-yellow flex items-center gap-[10px] py-3 pl-4 cursor-pointer transition-300 hover:bg-gray-1 group relative font-medium"
            >
              <span class="icon-notification text-2xl"></span>
              <span class="text-sm">Mening ma'lumotlarim </span>
              <hr class="absolute bottom-0 bg-gray-1 h-px w-full left-0 border-none" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/my-profile/exports')"
              class="[&.router-link-exact-active]:!bg-gray-1 [&.router-link-exact-active]:!text-yellow flex items-center gap-[10px] py-3 pl-4 cursor-pointer transition-300 hover:bg-gray-1 group relative font-medium"
            >
              <span class="icon-notification text-2xl"></span>
              <span class="text-sm">Tashkilotni baholash</span>
              <hr class="absolute bottom-0 bg-gray-1 h-px w-full left-0 border-none" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/my-profile/exports')"
              class="[&.router-link-exact-active]:!bg-gray-1 [&.router-link-exact-active]:!text-yellow flex items-center gap-[10px] py-3 pl-4 cursor-pointer transition-300 hover:bg-gray-1 group relative font-medium"
            >
              <span class="icon-notification text-2xl"></span>
              <span class="text-sm">Exportlar</span>
              <hr class="absolute bottom-0 bg-gray-1 h-px w-full left-0 border-none" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/my-profile/notifications')"
              class="[&.router-link-exact-active]:!bg-gray-1 [&.router-link-exact-active]:!text-yellow flex items-center gap-[10px] py-3 pl-4 cursor-pointer transition-300 hover:bg-gray-1 group relative font-medium"
            >
              <span class="icon-notification text-2xl"></span>
              <span class="text-sm">Xabarnomalar </span>
              <hr class="absolute bottom-0 bg-gray-1 h-px w-full left-0 border-none" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/my-profile/saved')"
              class="[&.router-link-exact-active]:!bg-gray-1 [&.router-link-exact-active]:!text-yellow flex items-center gap-[10px] py-3 pl-4 cursor-pointer transition-300 hover:bg-gray-1 group relative font-medium"
            >
              <span class="icon-notification text-2xl"></span>
              <span class="text-sm archive-add">Saqlanganlar</span>
              <hr class="absolute bottom-0 bg-gray-1 h-px w-full left-0 border-none" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/my-profile/export-history')"
              class="[&.router-link-exact-active]:!bg-gray-1 [&.router-link-exact-active]:!text-yellow flex items-center gap-[10px] py-3 pl-4 cursor-pointer transition-300 hover:bg-gray-1 group relative font-medium"
            >
              <span class="icon-notification text-2xl"></span>
              <span class="text-sm">Export tarixi</span>
              <hr class="absolute bottom-0 bg-gray-1 h-px w-full left-0 border-none" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/my-profile/organization-history')"
              class="[&.router-link-exact-active]:!bg-gray-1 [&.router-link-exact-active]:!text-yellow flex items-center gap-[10px] py-3 pl-4 cursor-pointer transition-300 hover:bg-gray-1 group relative font-medium"
            >
              <span class="icon-notification text-2xl"></span>
              <span class="text-sm">Tashkilot tarixi</span>
              <hr class="absolute bottom-0 bg-gray-1 h-px w-full left-0 border-none" />
            </NuxtLink>
          </div>
        </aside>
        <main class="bg-white shadow-card-2 border border-gray-1 rounded-[20px] p-5">
          <slot />
        </main>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
