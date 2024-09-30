<template>
  <div>
    <UIBreadcrumb :breadcrumb />
    <div class="py-8 container">
      <section class="mb-16">
        <div class="grid grid-cols-12 lg:items-end gap-5 mb-5">
          <div class="flex flex-col items-start gap-3 col-span-12 lg:col-span-7">
            <h1 class="font-bold text-xl sm:text-2xl">Standartlar</h1>
            <p class="text-sm sm:text-base text-gray-5 leading-6">Bizning eng yaxshi xitlarimiz: eng mashhur ISO standartlari, shu jumladan boshqaruv tizimi standartlarimiz</p>
          </div>
          <FormInput v-model="search" placeholder="Qidirish uchun kiriting..." inputClass="!pl-0" wrapperClass="col-span-12 lg:col-span-5">
            <template #prefix>
              <div class="h-max pl-3 pr-3 pointer-events-none flex-center">
                <span class="icon-search flex-center text-lg h-[18px]"></span>
              </div>
            </template>

            <template #suffix>
              <button class="px-3 h-max flex-center cursor-pointer transition-300 opacity-0 scale-75 group invisible" :class="{ '!opacity-100 !scale-100 !visible': search }">
                <span class="icon-xmark-filled text-xl text-gray group-hover:text-red transition-300">
                  <svg class="w-[18px] h-[18px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#101010" />
                    <path
                      d="M13.06 11.9999L15.36 9.69986C15.65 9.40986 15.65 8.92986 15.36 8.63986C15.07 8.34986 14.59 8.34986 14.3 8.63986L12 10.9399L9.69998 8.63986C9.40998 8.34986 8.92999 8.34986 8.63999 8.63986C8.34999 8.92986 8.34999 9.40986 8.63999 9.69986L10.94 11.9999L8.63999 14.2999C8.34999 14.5899 8.34999 15.0699 8.63999 15.3599C8.78999 15.5099 8.97999 15.5799 9.16999 15.5799C9.35999 15.5799 9.54998 15.5099 9.69998 15.3599L12 13.0599L14.3 15.3599C14.45 15.5099 14.64 15.5799 14.83 15.5799C15.02 15.5799 15.21 15.5099 15.36 15.3599C15.65 15.0699 15.65 14.5899 15.36 14.2999L13.06 11.9999Z"
                      fill="#101010"
                    />
                  </svg>
                </span>
              </button>
            </template>
          </FormInput>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <NuxtLink to="/" v-for="item in 10">
            <div class="flex flex-col gap-3 bg-white rounded-xl p-4 border border-gray-1 shadow-card-2 transition-300 hover:shadow-none">
              <h2 class="text-xl leading-140 text-blue font-bold">ISO/IEC 27001:2022</h2>
              <p class="text-sm text-gray-5 line-clamp-4">Axborot xavfsizligi, kiberxavfsizlik va maxfiylikni himoya qilish — Axborot xavfsizligini boshqarish tizimlari — Talablar</p>
            </div>
          </NuxtLink>
        </div>
      </section>
      <section>
        <h1 class="font-bold text-xl sm:text-2xl mb-5">Top standartlar</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CardStandart v-for="item in 5" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const breadcrumb = [
  {
    title: 'Standardlar',
    link: '/profile',
  },
]
const search = ref('')
</script>
