<template>
  <div class="container">
    <SectionTitle :title="'Sektorlar'" link="/sectors" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <NuxtLink to="/" v-for="item in 12">
        <div class="rounded-xl bg-white border border-gray-1 p-3 flex max-md:justify-center max-md:flex-col items-center cursor-pointer transition-300 hover:shadow-card h-full gap-2 md:gap-3">
          <div class="flex-center w-11 h-11 bg-gray-1 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18.1401 21.62C17.2601 21.88 16.2201 22 15.0001 22H9.00011C7.78011 22 6.74011 21.88 5.86011 21.62C6.08011 19.02 8.75011 16.97 12.0001 16.97C15.2501 16.97 17.9201 19.02 18.1401 21.62Z"
                stroke="#011432"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
                stroke="#011432"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z"
                stroke="#011432"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="flex-grow flex flex-col justify-between">
            <h3 class="text-sm md:text-base leading-130 font-medium w-full my-auto max-md:text-center md:line-clamp-1">Sog‘liq</h3>
            <p class="text-sm text-gray-4 leading-130 w-full">400 ta</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
