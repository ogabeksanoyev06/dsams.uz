<template>
  <div class="transition-300 group relative z-10 grid grid-cols-1 gap-3 overflow-hidden rounded-xl border bg-background p-4 hover:shadow-card lg:grid-cols-[122px_minmax(0,1fr)]">
    <div class="flex flex-col gap-3 max-lg:hidden">
      <div class="h-[176px] flex-shrink-0">
        <UiImage :src="item?.photo_url" :alt="item?.name" class="size-full rounded-lg object-cover shadow" />
      </div>
      <NuxtLink :to="localePath(`/standards/${item?._id}`)">
        <UiButton class="h-9">
          Ko‘rish
          <Icon class="size-4" name="lucide:arrow-right" />
        </UiButton>
      </NuxtLink>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex w-full flex-col gap-1">
        <div class="flex items-center">
          <h3 class="text-lg font-bold sm:text-xl">{{ item?.name }}</h3>
          <span class="ml-auto text-xs text-muted-foreground">{{ item.creation_date + " " + "yil" }}</span>
        </div>
        <div class="line-clamp-4 text-sm font-medium" v-html="item.short_description" />
      </div>
      <div class="line-clamp-2 text-xs text-muted-foreground" v-html="item.description" />
      <NuxtLink :to="localePath(`/standards/${item?._id}`)" class="lg:hidden">
        <UiButton class="h-9">
          Ko‘rish
          <Icon class="size-4" name="lucide:arrow-right" />
        </UiButton>
      </NuxtLink>
    </div>
    <div class="absolute bottom-0 right-4 z-[-1]">
      <img src="/assets/svg/bg-logo.svg" alt="" class="" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    item: {
      type: Object,
    },
  });

  const localePath = useLocalePath();
</script>
