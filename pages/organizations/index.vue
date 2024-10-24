<template>
  <div>
    <UIBreadcrumb :breadcrumb />
    <div class="py-8 container">
      <div class="grid grid-cols-12 lg:items-end gap-5 mb-5">
        <div class="flex flex-col items-start gap-3 col-span-12 lg:col-span-7">
          <h1 class="font-bold text-xl sm:text-2xl">Tashkilotlar</h1>
          <p class="text-sm sm:text-base text-gray-5 leading-6">Sektorlarimiz orqali siz iso standartlarini ko‘rishingiz mumkin va barcha turdagi sektorlardan isolarni topshingiz mumkin</p>
        </div>
        <div class="col-span-12 lg:col-span-5">
          <FormInput prefix suffix v-model="search" placeholder="Qidirish uchun kiriting..." inputClass="" wrapperClass="!bg-white">
            <template #prefix>
              <div class="h-max pointer-events-none flex-center">
                <span class="icon-search flex-center text-lg h-[18px]"></span>
              </div>
            </template>

            <template #suffix>
              <button class="h-max flex-center cursor-pointer transition-300 opacity-0 scale-75 group invisible" :class="{ '!opacity-100 !scale-100 !visible': search }">
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
      </div>
      <div class="grid lg:grid-cols-12 gap-6">
        <aside class="sticky h-[calc(100vh-290px)] top-28 lg:col-span-4 hidden lg:block bg-white border border-gray-1 shadow-card-2 rounded-2xl">
          <div class="max-h-[calc(100vh-320px)] overflow-y-auto"></div>
        </aside>
        <main class="lg:col-span-8">
          <section class="companies-container">
            <div class="flex flex-col gap-4">
              <div class="flex-center-between max-sm:flex-col max-sm:items-start gap-4">
                <div>
                  <h3 class="text-dark text-lg font-medium leading-130">Barcha natijalar</h3>
                  <p class="text-gray text-sm font-normal leading-130">Natijalar 486</p>
                </div>
                <FormSelect v-model="ratingFilter" :options="ratingOptions" label-key="label" value-key="value" placeholder="Reyting" selectedOptionStyles="sm:min-w-[272px] max-sm:w-full !bg-white" />
              </div>
              <div class="flex flex-col gap-5">
                <div class="bg-white company-card rounded-xl transition-300 border-b border-gray-1 shadow-card-2 hover:shadow-none" v-for="item in 10">
                  <div class="p-3 md:p-4 max-md:pb-2 flex md:justify-between items-start w-full gap-4 cursor-pointer">
                    <div class="flex-y-center gap-2 md:gap-4 w-full">
                      <div class="shrink-0">
                        <div class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-black before:absolute before:inset-0 w-10 h-10 rounded-md before:rounded-md">
                          <div class="w-full h-full object-cover bg-white">
                            <img alt="avatar-image" class="object-cover w-full h-full" src="https://cdn.commeta.uz/60x/https://cdn.commeta.uz/media/uploaded/2024/07/10/commeta_wrBMKUi.png" />
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col gap-1 w-full">
                        <div class="flex-center-between w-full">
                          <div class="flex-y-center gap-2">
                            <span class="font-semibold leading-130 text-dark break-all line-clamp-1">Toshkent davlat iqtisodiyot universiteti</span>
                            <img src="https://cdn.commeta.uz/static/review/static/front/svg/company/verified-gray.png" class="flex-shrink-0 object-cover inline-flex items-center w-5 h-5 group relative _v-tooltip" />
                          </div>
                          <div class="flex gap-2 shrink-0">
                            <span class="max-md:hidden py-1 px-1.5 rounded bg-gray-6 text-xs font-medium"> OTM </span>
                          </div>
                        </div>
                        <div class="flex-y-center gap-2">
                          <div class="flex-y-center gap-1">
                            <UIRatingStars v-model="rating" />
                            <p class="text-xs md:text-base font-medium">4.6</p>
                          </div>
                          <i class="h-4 w-px bg-gray-3 inline-block"></i>
                          <div class="flex-y-center gap-1">
                            <p class="text-xs text-gray-5 font-normal shrink-0">04.05.2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-white-100 p-2 pr-4 flex-center-between max-md:gap-0.5">
                    <div class="flex gap-2 shrink-0">
                      <span class="md:hidden py-1 px-1.5 rounded bg-gray-300 text-xs font-normal leading-130 text-gray-700"> OTM </span>
                    </div>
                    <button class="group">
                      <span class="icon-archive-add text-lg text-gray-5"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex-center mt-3">
                <UIButton class="w-full text-white"> Yana yuklash </UIButton>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ratingFilter = ref('')
const search = ref('')

// Reyting variantlari
const ratingOptions = [
  { value: 'highest', label: 'Eng yuqori ball olganlar' },
  { value: 'lowest', label: 'Eng past ball olganlar' },
]

const rating = ref(3)

const breadcrumb = [
  {
    title: 'Tashkilotlar',
    link: '/profile',
  },
]
</script>
