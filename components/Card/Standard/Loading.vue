<template>
  <div class="transition-300 group relative z-10 grid grid-cols-1 gap-3 overflow-hidden rounded-xl  bg-background p-4 hover:shadow-card lg:grid-cols-[122px_minmax(0,1fr)]">
    <div class="flex flex-col gap-3 max-lg:hidden">
      <UiSkeleton class="h-[176px] w-full flex-shrink-0 rounded-lg" />
      <UiSkeleton class="h-9 w-full rounded-md" />
    </div>
    <div class="flex flex-col gap-3">
      <UiSkeleton class="h-6 w-[200px] rounded-md" />
      <div class="space-y-2">
        <UiSkeleton class="h-4 w-full rounded-md" />
        <UiSkeleton class="h-4 w-full rounded-md" />
        <UiSkeleton class="h-4 w-[80%] rounded-md" />
      </div>
      <UiSkeleton class="h-9 w-full rounded-md lg:hidden" />
    </div>
  </div>
</template>
