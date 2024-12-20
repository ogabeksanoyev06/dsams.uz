<template>
  <section>
    <div class="bg-background py-6 sm:py-8">
      <div class="flex-between container items-center gap-4 max-sm:flex-col max-sm:items-start">
        <div class="shrink-0">
          <h1 class="text-xl font-bold sm:text-2xl md:text-3xl">Bloglar</h1>
        </div>
      </div>
    </div>
    <div class="bg-background py-4 pb-8">
      <div class="container">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardBlog v-for="(item, key) in blogs.data" :key :item />
        </div>
        <div class="mt-6 flex justify-center gap-2 sm:justify-end">
          <UiPagination>
            <UiPaginationList v-slot="{ items }">
              <template v-for="(page, index) in items" :key="index">
                <UiPaginationItem asChild v-if="page.type === 'page'" v-bind="page" />
                <UiPaginationEllipsis asChild v-else-if="page.type === 'ellipsis'" v-bind="page" :icon="ellipsisIcon" />
              </template>
            </UiPaginationList>
          </UiPagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useBlogsStore } from "@/stores/blogs.js";
  import { useI18n } from 'vue-i18n'

  const blogStore = useBlogsStore();

  const { getBlogs } = blogStore;

  const { locale } = useI18n();

  const limit = ref(10);
  const page = ref(1);

  const { data: blogs } = await useAsyncData("blogs", async () => {
    return await getBlogs({ lang: locale.value, limit: limit.value, page: page.value });
  });
</script>
