<template>
  <div class="relative inline-block overflow-hidden rounded-xl border bg-background shadow-sm">
    <UiSkeleton class="relative aspect-[382/255] w-full rounded-t-xl" />
    <div class="flex h-full flex-col space-y-2 rounded-xl p-4">
      <div class="flex-y-center space-x-1">
        <UiSkeleton class="h-4 w-4 rounded-full" />
        <UiSkeleton class="h-4 w-[120px]" />
      </div>
      <div class="mt-2 space-y-2">
        <UiSkeleton class="h-4 w-[200px]" />
        <UiSkeleton class="h-4 w-[250px]" />
        <UiSkeleton class="h-4 w-[180px]" />
      </div>
    </div>
  </div>
</template>
