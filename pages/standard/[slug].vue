<template>
  <div>
    <UIBreadcrumb :breadcrumb />
    <div class="container py-8">
      <section class="bg-white rounded-2xl border border-gray-1 shadow-card-2 p-4 sm:p-8">
        <div class="flex gap-6">
          <div class="max-w-[250px] w-full max-lg:hidden">
            <div class="w-full rounded-xl bg-white overflow-hidden shrink-0 group shadow-md">
              <img class="group-hover:hovered w-full" alt="Verify document" src="/assets/images/standart.png" />
            </div>
            <UIButton class="text-xs hover:shadow-yellow-2 w-full mt-4">
              Ko‘rish
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M11.46 5.93335C13.86 6.14002 14.84 7.37335 14.84 10.0733V10.16C14.84 13.14 13.6467 14.3333 10.6667 14.3333H6.32665C3.34665 14.3333 2.15332 13.14 2.15332 10.16V10.0733C2.15332 7.39335 3.11999 6.16002 5.47999 5.94002"
                  stroke="#011432"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M8.5 1.33337V9.92004" stroke="#011432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.7333 8.43335L8.49994 10.6667L6.2666 8.43335" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </UIButton>
          </div>
          <div>
            <h5 class="text-blue text-lg lg:text-xl xl:text-2xl font-bold mb-2">ISO/IEC 27017:2015</h5>
            <p class="text-gray-5 text-base lg:text-lg xl:text-xl mb-5">Axborot texnologiyalari - Xavfsizlik texnikasi - Bulutli xizmatlar uchun ISO/IEC 27002 ga asoslangan axborot xavfsizligini boshqarish bo'yicha amaliyot kodeksi</p>
            <p class="text-xl mb-2"><span class="text-green-500 font-semibold">Chop etilgan</span> (2015 yil 1-nashr)</p>
            <p class="text-sm sm:text-base text-gray-5">Bu nashr oxirgi marta 2021-yilda ko‘rib chiqilgan va tasdiqlangan. Shuning uchun bu versiya dolzarbligicha qolmoqda.</p>
            <UIButton class="lg:hidden text-xs hover:shadow-yellow-2 w-full mt-4">
              Ko‘rish
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M11.46 5.93335C13.86 6.14002 14.84 7.37335 14.84 10.0733V10.16C14.84 13.14 13.6467 14.3333 10.6667 14.3333H6.32665C3.34665 14.3333 2.15332 13.14 2.15332 10.16V10.0733C2.15332 7.39335 3.11999 6.16002 5.47999 5.94002"
                  stroke="#011432"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M8.5 1.33337V9.92004" stroke="#011432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.7333 8.43335L8.49994 10.6667L6.2666 8.43335" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </UIButton>
          </div>
        </div>
        <section class="mt-8">
          <h2 class="font-bold text-xl sm:text-2xl mb-5">Umumiy ma’lumotlar</h2>
          <p class="text-gray-5 text-sm sm:text-base leading-140">
            ISO/IEC 27017:2015 bulut xizmatlarini taqdim etish va ulardan foydalanishda qoʻllaniladigan axborot xavfsizligini boshqarish boʻyicha koʻrsatmalar beradi: - ISO/IEC 27002da ko'rsatilgan tegishli boshqaruv vositalarini amalga oshirish
            bo'yicha qo'shimcha yo'riqnoma; - maxsus bulut xizmatlariga taalluqli amalga oshirish bo'yicha ko'rsatmalar bilan qo'shimcha boshqaruv elementlari. Ushbu Tavsiya | Xalqaro standart bulutli xizmat ko'rsatuvchi provayderlar va bulutli
            xizmatlar mijozlari uchun nazorat va amalga oshirish bo'yicha ko'rsatmalar beradi.
          </p>
        </section>
      </section>
      <section class="mt-16">
        <SectionTitle title="Top standartlar" link="/standards" linkTitle="Barcha standartlar" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <NuxtLink :to="localePath('/standard/slug')" v-for="item in 10">
            <div class="flex flex-col gap-3 bg-white rounded-xl p-4 border border-gray-1 shadow-card-2 transition-300 hover:shadow-none">
              <h2 class="text-xl leading-140 text-blue font-bold">ISO/IEC 27001:2022</h2>
              <p class="text-sm text-gray-5 line-clamp-4">Axborot xavfsizligi, kiberxavfsizlik va maxfiylikni himoya qilish — Axborot xavfsizligini boshqarish tizimlari — Talablar</p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const breadcrumb = [
  {
    title: 'Standardlar',
    link: '/standards',
  },
  {
    title: 'IT va tegishli texnologiyalar',
    link: '/',
  },
]
</script>
