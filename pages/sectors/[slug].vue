<template>
  <div class="container grid lg:grid-cols-12 mt-8 gap-6 pb-8">
    <aside class="sticky h-[calc(100vh-150px)] top-20 lg:col-span-4 hidden lg:block"></aside>
    <main class="lg:col-span-8">
      <div class="grid grid-cols-10 gap-4">
        <FormInput v-model="search" inputClass="!pl-0" wrapperClass="col-span-6" placeholder="Qidirish uchun kiriting...">
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
      <section class="mt-6 companies-container">
        <div class="flex flex-col gap-4">
          <p class="bg-white p-3 rounded-lg leading-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, dolore dolores sunt totam dolorem ipsum cum nesciunt quasi nulla qui? Repudiandae, dolore exercitationem! Quam quia tempore ullam corporis sapiente quo.
          </p>
          <hr />
          <div class="flex-center-between max-sm:flex-col max-sm:items-start gap-4">
            <div>
              <h3 class="text-dark text-lg font-medium leading-130">Barcha natijalar</h3>
              <p class="text-gray text-sm font-normal leading-130">Natijalar 486</p>
            </div>
            <FormSelect v-model="ratingFilter" :options="ratingOptions" label-key="label" value-key="value" placeholder="Reyting" wrapperStyles="sm:min-w-[272px] max-sm:w-full">
              <template #prefix>
                <span class="icon-search text-xl text-gray-4 leading-5"></span>
              </template>
            </FormSelect>
          </div>
          <div class="flex flex-col gap-3">
            <div class="bg-white company-card rounded-xl transition-300 border-b" v-for="item in 10">
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
                        <span class="max-md:hidden py-1 px-1.5 rounded bg-gray-300 text-xs font-normal leading-130 text-gray-700"> OTM </span>
                      </div>
                    </div>
                    <div class="flex-y-center gap-2">
                      <div class="flex-y-center gap-1">
                        <UIRatingStars v-model="rating" />
                        <p class="text-xs md:text-base leading-130 text-dark font-medium">4.6</p>
                      </div>
                      <i class="h-5 w-px bg-gray-300 inline-block"></i>
                      <div class="flex-y-center gap-1">
                        <p class="text-sm leading-130 text-gray-700 md:text-dark font-normal shrink-0">04.05.2024</p>
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
                  <svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      class="transition-300 group-hover:stroke-blue"
                      d="M4.54564 1.66659C4.22437 1.66659 3.91535 1.78353 3.68808 1.99214C3.46077 2.20047 3.3335 2.48298 3.3335 2.77769V17.5738C3.3335 17.9932 3.70321 18.3333 4.16077 18.3333H4.16382C4.40928 18.3333 4.64259 18.2438 4.81531 18.0849C5.61833 17.3494 7.98804 15.1771 8.96684 14.2816C9.23956 14.0302 9.61225 13.8888 10.0002 13.8888C10.3881 13.8888 10.7608 14.0302 11.0335 14.2816C12.0153 15.1799 14.3971 17.3627 15.1911 18.0916C15.3608 18.2463 15.588 18.3333 15.8274 18.3333C16.2911 18.3333 16.6668 17.9891 16.6668 17.5644V2.77769C16.6668 2.48298 16.5396 2.20047 16.3123 1.99214C16.085 1.78353 15.776 1.66659 15.4547 1.66659H4.54564Z"
                      fill="transparent"
                      stroke="#8E9BA8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
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
</script>
