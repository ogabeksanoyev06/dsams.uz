<template>
  <section>
    <div class="container py-8">
      <h1 class="leading-130 text-blue text-2xl font-semibold max-md:text-xl">{{ blog?.data?.title }}</h1>
      <p class="mb-6">{{ $dayjs(blog.data.createdAt).format("DD.MM.YYYY") }}</p>
      <div class="aspect-ratio relative mb-6 overflow-hidden rounded-2xl max-sm:rounded-none">
        <UiImage :src="blog?.data?.photo_url" alt="blog-single" class="h-full w-full object-cover" />
      </div>
      <div class="content">
        <div class="text-sm sm:text-base" v-html="blog?.data?.description" />
      </div>
    </div>
    <SectionBlogs />
  </section>
</template>

<script setup>
  import { useBlogsStore } from "@/stores/blogs.js";
  import { useI18n } from "vue-i18n";

  const blogStore = useBlogsStore();

  const { getBlogById } = blogStore;

  const { locale } = useI18n();

  const route = useRoute();

  const { data: blog } = await useAsyncData("blog", async () => {
    return await getBlogById(route.params.id, { lang: locale.value });
  });
</script>
