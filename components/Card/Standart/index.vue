<template>
  <div class="grid grid-cols-1 lg:grid-cols-[122px_minmax(0,1fr)] gap-3 relative z-10 overflow-hidden bg-white rounded-xl border border-gray-1 shadow-card-2 p-4 group transition-300 hover:shadow-card">
    <div class="flex flex-col gap-3 max-lg:hidden">
      <div class="flex-shrink-0 h-[176px]">
        <img src="/assets/images/standart.png" alt="" class="size-full object-cover rounded-lg shadow" />
      </div>
      <UIButton class="text-xs group-hover:shadow-yellow-2 !py-2">
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
    <div class="flex flex-col gap-3">
      <h3 class="text-lg sm:text-xl font-bold text-blue">ISO/IEC 27001:2022</h3>
      <p class="text-sm text-gray-5 line-clamp-6">
        Axborot xavfsizligi, kiberxavfsizlik va maxfiylikni himoya qilish — Axborot xavfsizligini boshqarish tizimlari — TalablarAxborot xavfsizligi, kiberxavfsizlik va maxfiylikni himoya qilish — Axborot xavfsizligini boshqarish tizimlari — Talablar
      </p>
      <UIButton class="text-xs lg:hidden group-hover:shadow-yellow-2">
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
    <div class="absolute right-4 bottom-0 z-[-1]">
      <img src="/assets/svg/bg-logo.svg" alt="" class="" />
    </div>
  </div>
</template>

<script setup></script>
