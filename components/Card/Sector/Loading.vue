<template>
  <div class="transition-300 flex h-full cursor-progress items-center gap-2 rounded-xl border-b bg-background p-3 max-md:flex-col max-md:justify-center md:gap-3 md:p-4">
    <UiSkeleton class="preloader-image flex-center h-9 w-9 flex-shrink-0 rounded-full max-sm:hidden" />
    <div class="grid w-full gap-1">
      <UiSkeleton class="my-auto h-4 w-full rounded max-md:text-center md:text-sm" />
      <UiSkeleton class="my-auto h-4 w-3/4 rounded max-md:text-center md:text-sm" />
    </div>
  </div>
</template>
