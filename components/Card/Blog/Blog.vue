<template>
  <NuxtLink :to="localePath(`/blogs/${item?._id}`)" class="transition-300 group relative inline-block cursor-pointer overflow-hidden rounded-xl border bg-background shadow-sm hover:shadow-md">
    <div class="relative aspect-[382/255] w-full overflow-hidden rounded-t-xl">
      <UiImage :src="item?.photo_url" alt="qwe" class="h-full w-full object-cover duration-300 group-hover:scale-105" />
    </div>
    <div class="flex h-full flex-col rounded-xl p-4">
      <div class="flex-y-center space-x-1">
        <Icon name="lucide:calendar" class="h-4 text-base text-muted-foreground" />
        <span class="leading-130 text-sm font-medium text-muted-foreground">{{ $dayjs(item?.createdAt).format("DD.MM.YYYY") }}</span>
      </div>
      <div class="leading-130 transition-300 mt-2 line-clamp-3 text-base font-medium group-hover:text-primary" v-html="item?.description" />
    </div>
  </NuxtLink>
</template>

<script setup>
  defineProps({
    item: {
      type: Object,
    },
  });
  const localePath = useLocalePath();
</script>
