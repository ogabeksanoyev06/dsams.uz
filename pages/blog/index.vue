<template>
  <div>
    <UIBreadcrumb />
    <div class="container py-8">
      <div class="flex max-lg:flex-col gap-4 lg:items-end justify-between mb-6 sm:mb-10">
        <div class="flex flex-col items-start space-y-1 max-w-[580px]">
          <h1 class="text-3xl font-bold">Blog</h1>
          <p class="text-base text-gray-5 leading-130">Blogimizga sayohat qiling va qiziqarli maqolalar, hikoyalar hamda foydali maslahatlardan ilhomlaning.</p>
        </div>
        <div>
          <FormInput class="w-full sm:max-w-[322px] !bg-white" :input-class="['sm:!text-2xs !py-2.5 !pl-0']" :prefixClass="''" :suffixClass="'ml-2 text-red-500'">
            <template #prefix>
              <div class="h-max pl-4 pr-2 pointer-events-none flex-center">
                <span class="icon-search flex-center text-lg h-[18px] text-gray"></span>
              </div>
            </template>

            <template #suffix>
              <div class="px-3 h-max flex-center cursor-pointer transition-300 group !opacity-100 !scale-100 !">
                <span class="icon-search text-yellow"></span>
              </div>
            </template>
          </FormInput>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-sm:gap-0">
        <CardBlog v-for="n in 12" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
