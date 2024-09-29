<template>
  <div class="container">
    <SectionTitle :title="'Sektorlar'" link="/sectors" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
      <NuxtLink to="/" v-for="item in 12">
        <div class="rounded-xl bg-white border border-gray-1 p-3 flex items-center cursor-pointer transition-300 hover:shadow-card h-full gap-2 md:gap-3">
          <div class="flex-center w-10 h-10 bg-gray-1 rounded-lg p-1">
            <img src="https://cdn.commeta.uz/100x/https://cdn.commeta.uz/media/media/Wallet_Money.svg" alt="category-icon" class="w-full h-full" />
          </div>
          <div class="flex-grow flex flex-col justify-between">
            <h3 class="text-xs sm:text-sm md:text-base !leading-130 font-medium w-full my-auto md:line-clamp-1">Sog‘liq</h3>
            <p class="text-sm text-gray-4 leading-130 w-full">400 ta</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
