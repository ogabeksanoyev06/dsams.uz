<template>
  <div>
    <UIBreadcrumb :breadcrumb="breadcrumb" />
    <div class="container py-8">
      <div class="sm:bg-white sm:p-4 sm:rounded-2xl sm:shadow-card-2 sm:border sm:border-gray-1 mb-16">
        <h1 class="text-2xl max-md:text-xl font-semibold leading-130 text-blue">ISO 9000 oilasi - Sifat menejmenti</h1>
        <div class="flex-center-between my-4 py-1 md:py-2 mt-2 mb-4">
          <p class="flex-y-center space-x-1.5 text-sm md:text-base text-gray-4 max-sm:text-dark max-sm:font-medium leading-130">
            <i class="icon-calendar text-lg"> </i>
            <span class="flex-center">28 Avgust, 2024 <span class="w-1 h-1 bg-gray rounded-full mx-1.5"> </span> 2:13 </span>
          </p>
        </div>
        <div class="aspect-ratio rounded-2xl relative overflow-hidden max-sm:rounded-none mb-6">
          <img src="/assets/images/image (6).png" alt="blog-single" class="w-full h-full object-cover" />
        </div>
        <div class="content max-w-[965px] mx-auto">
          <p class="text-sm md:text-base lg:text-lg xl:text-xl sm:leading-[28px]">
            ISO 9000 standartlar oilasi tashkilotlarga mahsulot va xizmatlari sifatini yaxshilashga va doimiy ravishda mijozlarning talablarini qondirishga yordam beradi.ISO 9000 standartlar oilasi tashkilotlarga mahsulot va xizmatlari sifatini
            yaxshilashga va doimiy ravishda mijozlarning talablarini qondirishga yordam beradi.ISO 9000 standartlar oilasi tashkilotlarga mahsulot va xizmatlari sifatini yaxshilashga va doimiy ravishda mijozlarning talablarini qondirishga yordam
            beradi.ISO 9000 standartlar oilasi tashkilotlarga mahsulot va xizmatlari sifatini yaxshilashga va doimiy ravishda mijozlarning talablarini qondirishga yordam beradi.ISO 9000 standartlar oilasi tashkilotlarga mahsulot va xizmatlari
            sifatini yaxshilashga va doimiy ravishda mijozlarning talablarini qondirishga yordam beradi.ISO 9000 standartlar oilasi tashkilotlarga mahsulot va xizmatlari sifatini yaxshilashga va doimiy ravishda mijozlarning talablarini qondirishga
            yordam beradi.
          </p>
        </div>
      </div>
    </div>
    <SectionBlog />
  </div>
</template>

<script setup>
const breadcrumb = [
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'ISO 9000 oilasi - Sifat menejmenti',
    link: '',
  },
]
const search = ref('')
</script>
