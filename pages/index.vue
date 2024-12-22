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

  const blogStore = useBlogsStore();
  const sektorStore = useSektorStore();
  const standardStore = useStandardsStore();

  const { getBlogs } = blogStore;
  const { getSektors } = sektorStore;
  const { getStandards } = standardStore;
</script>
