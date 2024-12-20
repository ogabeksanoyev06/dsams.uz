<template>
  <div>
    <SectionSectors />
    <SectionInfos />
    <SectionStandards />
    <SectionAbout />
    <SectionBlogs />
  </div>
</template>

<script setup>
  import { useBlogsStore } from "@/stores/blogs.js";
  import { useSektorStore } from "@/stores/sektors.js";
  import { useStandardsStore } from "@/stores/standards.js";
  import { useI18n } from "vue-i18n";

  const { locale } = useI18n();

  const blogStore = useBlogsStore();
  const sektorStore = useSektorStore();
  const standardStore = useStandardsStore();

  const { getBlogs } = blogStore;
  const { getSektors } = sektorStore;
  const { getStandards } = standardStore;
</script>
