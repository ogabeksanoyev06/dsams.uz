<template>
  <NuxtLink :to="localePath(`/sectors/${item?._id}`)" class="transition-300 flex h-full cursor-pointer items-center gap-2 rounded-xl border-b border-gray-400 bg-background p-3 hover:shadow-card max-md:flex-col max-md:justify-center md:gap-3 md:p-4">
    <div v-if="letter" class="preloader-image flex-center h-8 w-8 flex-shrink-0 rounded-full border-2 max-sm:hidden">
      <span class="text-sm font-semibold">{{ letter }}</span>
    </div>
    <h3 class="!leading-130 my-auto w-full text-sm font-medium lowercase max-md:text-center md:line-clamp-2 md:text-sm">
      {{ formattedName }}
    </h3>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    item: {
      type: Object,
    },
  });

  const localePath = useLocalePath();

  const extractLetterAndName = (name) => {
    const regex = /^([A-ZА-Я])\)\s(.+)/;

    const match = name?.match(regex);

    if (match) {
      return { letter: match[1], formattedName: match[2] };
    }

    return { letter: null, formattedName: name };
  };

  const { letter, formattedName } = extractLetterAndName(props.item?.name || "");
</script>
