<template>
  <div class="sticky top-0 z-[90]">
    <header class="relative z-[100] w-full pt-4 pb-3 transition-300 bg-white border-b-[0.5px] border-transparent">
      <div class="container !max-w-[1440px] flex-center-between gap-5 h-16">
        <div class="flex items-center md:gap-10 lg:gap-14 xl:gap-20">
          <NuxtLink to="/" class="flex items-center justify-center flex-shrink-0 p-[5.249px_6.358px_6.698px_6.698px] h-12 w-[140px]">
            <img src="/assets/svg/logo.svg" alt="" class="w-full h-full object-contain" />
          </NuxtLink>
          <nav class="flex items-center max-lg:space-x-4 space-x-6 text-sm font-medium">
            <NuxtLink to="/" class="text-sm font-medium text-dark">Standartlar</NuxtLink>
            <NuxtLink to="/sectors" class="text-sm font-medium text-gray-5">Sektorlar</NuxtLink>
            <NuxtLink to="/" class="text-sm font-medium text-gray-5">Tashkilotlar</NuxtLink>
            <NuxtLink to="/" class="text-sm font-medium text-gray-5">Biz haqimizda</NuxtLink>
            <NuxtLink to="/" class="text-sm font-medium text-gray-5">Blog</NuxtLink>
          </nav>
        </div>
        <div class="flex flex-1 items-center justify-between space-x-4 lg:space-x-6 xl:space-x-8 md:justify-end">
          <UIButton class="!py-[7px] px-0 max-w-[150px] w-full !rounded-lg shadow-yellow-1 border-[1.5px] border-white/[0.12]"> Ariza qoldirish </UIButton>
          <div class="flex items-center space-x-4">
            <div class="shrink-0 bg-gray-3 relative w-px h-7"></div>
            <LayoutHeaderLanguageSwitcher class="max-md:hidden" />
            <div class="shrink-0 bg-gray-3 relative w-px h-7"></div>
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.96655 4.88334C1.96655 2.67619 3.76504 0.866669 5.98322 0.866669H14.0166C16.2355 0.866669 18.0312 2.6761 18.0415 4.87956L18.0416 4.88334L18.0416 16.625C18.0416 17.5538 17.704 18.4124 16.9454 18.8591C16.1868 19.3059 15.2727 19.1843 14.4615 18.7327M14.4615 18.7327L10.3878 16.4705C10.3261 16.4354 10.1905 16.3938 10.0072 16.3938C9.82465 16.3938 9.68373 16.4351 9.61454 16.4737L9.61328 16.4744L5.54661 18.7327L5.54409 18.7341C4.73187 19.1814 3.81918 19.2984 3.06266 18.8529C2.30552 18.407 1.96655 17.5518 1.96655 16.625V4.88334M5.98322 2.46667C4.65139 2.46667 3.56655 3.55715 3.56655 4.88334V16.625C3.56655 17.1982 3.76508 17.4097 3.87461 17.4742C3.98468 17.539 4.2675 17.6102 4.77127 17.3331C4.77163 17.3329 4.77199 17.3327 4.77234 17.3326L8.83523 15.0763C8.83508 15.0764 8.83538 15.0762 8.83523 15.0763C9.19928 14.8734 9.62528 14.7938 10.0072 14.7938C10.387 14.7938 10.8122 14.8724 11.1746 15.0773L15.2383 17.3339C15.7435 17.6153 16.0258 17.5439 16.1335 17.4805C16.2416 17.4168 16.4416 17.2046 16.4416 16.625V4.88541C16.4344 3.55631 15.3471 2.46667 14.0166 2.46667H5.98322Z"
                  fill="#4B5970"
                />
              </svg>
            </NuxtLink>
            <div class="shrink-0 bg-gray-3 relative w-px h-7"></div>
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.21657 7.425C4.21657 4.22484 6.81641 1.625 10.0166 1.625C13.2084 1.625 15.8166 4.23317 15.8166 7.425V9.83333C15.8166 9.99135 15.8533 10.237 15.9277 10.5082C16.0008 10.775 16.0936 11.0052 16.173 11.1446L17.1276 12.7301C17.9395 14.0833 17.291 15.8468 15.7939 16.3425C12.038 17.5971 7.98553 17.5969 4.22973 16.3421L4.22676 16.3411C3.47986 16.0883 2.9104 15.5616 2.65489 14.8715C2.39904 14.1806 2.48882 13.4089 2.89776 12.7292L3.85442 11.1403C3.85468 11.1399 3.85495 11.1395 3.85521 11.139C3.9359 11.0032 4.03058 10.7742 4.1051 10.5058C4.17993 10.2362 4.21657 9.99111 4.21657 9.83333V7.425ZM10.0166 3.225C7.70007 3.225 5.81657 5.10849 5.81657 7.425V9.83333C5.81657 10.1839 5.74489 10.5804 5.6468 10.9338C5.54864 11.2874 5.40621 11.6619 5.22873 11.9597L5.22694 11.9627L4.26872 13.5541C4.08599 13.8578 4.08411 14.1236 4.15534 14.316C4.22682 14.509 4.40283 14.7112 4.7384 14.8251C8.16507 15.9696 11.8615 15.9694 15.2881 14.8246L15.2905 14.8238C15.8089 14.6524 16.0432 14.0336 15.756 13.5539C15.7559 13.5537 15.7561 13.5542 15.756 13.5539L14.794 11.9563L14.7903 11.9498C14.6204 11.6553 14.4813 11.2839 14.3846 10.9314C14.2882 10.5797 14.2166 10.1836 14.2166 9.83333V7.425C14.2166 5.11683 12.3247 3.225 10.0166 3.225Z"
                  fill="#4B5970"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.72998 2.37478C8.08839 1.46022 8.9782 0.816681 10.0165 0.816681C11.0548 0.816681 11.9446 1.46022 12.303 2.37478C12.4142 2.65859 12.3545 2.98095 12.149 3.20607C11.9434 3.43119 11.6278 3.51995 11.3351 3.43496C11.1115 3.37005 10.8876 3.32156 10.6619 3.2942L10.6589 3.29384C9.96089 3.20658 9.30434 3.25866 8.69813 3.43488C8.40538 3.51998 8.0897 3.43129 7.8841 3.20617C7.6785 2.98105 7.61873 2.65864 7.72998 2.37478Z"
                  fill="#4B5970"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.31655 15.8834C8.31655 16.3454 8.50901 16.7778 8.81557 17.0843C9.12213 17.3909 9.55453 17.5834 10.0166 17.5834C10.9497 17.5834 11.7166 16.8165 11.7166 15.8834H13.3166C13.3166 17.7002 11.8334 19.1834 10.0166 19.1834C9.11191 19.1834 8.27764 18.8092 7.6842 18.2157C7.09076 17.6223 6.71655 16.788 6.71655 15.8834H8.31655Z"
                  fill="#4B5970"
                />
              </svg>
            </NuxtLink>
            <div class="shrink-0 bg-gray-3 relative w-px h-7"></div>
          </div>
          <UIButton class="!py-[7px] px-0 max-w-[150px] w-full !rounded-lg shadow-yellow-1 border-[1.5px] border-white/[0.12]"> Kirish </UIButton>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>
