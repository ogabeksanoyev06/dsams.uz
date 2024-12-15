<template>
  <div class="flex flex-col gap-2">
    <p class="leading-130 text-sm font-medium">Reyting</p>
    <div class="flex-center w-full gap-1 rounded-lg">
      <div
        v-for="rate in ratings"
        :key="rate.value"
        @click="toggleRating(rate.value)"
        :class="['flex-center transition-300 w-full cursor-pointer gap-1 rounded-md py-2', isActiveRating(rate.value) ? rate.activeClass : rate.defaultClass]"
      >
        <Icon name="i-lucide:star" class="transition-300 block size-4" :class="isActiveRating(rate.value) ? rate.activeIconColor : rate.iconColor" />

        <p :class="['leading-130 transition-300 text-sm font-semibold', isActiveRating(rate.value) ? 'text-white' : 'text-foreground']">{{ rate.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const ratings = ref([
    {
      value: 1,
      label: "1+",
      defaultClass: "bg-red-500 bg-opacity-10 hover:border-red-500",
      activeClass: "bg-red-500 !bg-opacity-100 border-red-500",
      iconColor: "text-red-500",
      activeIconColor: "text-red-50 !text-white",
    },
    {
      value: 2,
      label: "2+",
      defaultClass: "bg-red-500 bg-opacity-10 hover:border-red-500",
      activeClass: "bg-red-500 !bg-opacity-100 border-red-500",
      iconColor: "text-red-500",
      activeIconColor: "text-red-50 !text-white",
    },
    {
      value: 3,
      label: "3+",
      defaultClass: "bg-orange-500 bg-opacity-10 hover:border-orange-500",
      activeClass: "bg-orange-500 !bg-opacity-100 border-orange-500",
      iconColor: "text-orange-500",
      activeIconColor: "text-orange-50",
    },
    {
      value: 4,
      label: "4+",
      defaultClass: "bg-green-500 bg-opacity-10 hover:border-green-500",
      activeClass: "bg-green-500 !bg-opacity-100 border-green-500",
      iconColor: "text-green-500",
      activeIconColor: "text-green-50",
    },
    {
      value: 4.5,
      label: "4.5+",
      defaultClass: "bg-teal-500 bg-opacity-10 hover:border-teal-500",
      activeClass: "bg-teal-500 !bg-opacity-100 border-teal-500",
      iconColor: "text-teal-500",
      activeIconColor: "!text-white",
    },
  ]);

  const route = useRoute();
  const router = useRouter();

  const isActiveRating = (value) => {
    const ratingsInQuery = route.query.ball;
    const ratingsArray = ratingsInQuery ? ratingsInQuery.split(",").map(Number) : [];
    return ratingsArray.includes(value);
  };

  const toggleRating = (value) => {
    const currentRatings = route.query.ball ? route.query.ball.split(",") : [];

    const index = currentRatings.indexOf(String(value));

    if (index !== -1) {
      currentRatings.splice(index, 1);
    } else {
      currentRatings.push(String(value));
    }

    router.push({
      name: route.name,
      query: { ...route.query, ball: currentRatings.length ? currentRatings.join(",") : undefined },
    });
  };
</script>

<style scoped></style>
