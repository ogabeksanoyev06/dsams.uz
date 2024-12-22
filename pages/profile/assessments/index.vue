<template>
  <div class="overflow-x-auto">
    <UiTable class="w-full">
      <UiTableHeader>
        <UiTableRow>
          <UiTableHead>#</UiTableHead>
          <UiTableHead>Tashkilot</UiTableHead>
          <UiTableHead>Telefon raqam</UiTableHead>
          <UiTableHead>Email</UiTableHead>
          <UiTableHead>Sayt</UiTableHead>
          <UiTableHead>Muddat</UiTableHead>
          <UiTableHead>Baholash</UiTableHead>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody class="last:border-b">
        <UiTableRow v-for="(item, key) in data.data" :key>
          <UiTableCell>{{ key + 1 }}</UiTableCell>
          <UiTableCell>{{ item.company.name }}</UiTableCell>
          <UiTableCell>{{ item.company.phone_number }}</UiTableCell>
          <UiTableCell>{{ item.company.email }}</UiTableCell>
          <UiTableCell>{{ item.company.website }}</UiTableCell>
          <UiTableCell>{{ $dayjs(item.company.date).format("DD.MM.YYYY HH:mm") }}</UiTableCell>
          <UiTableCell>
            <NuxtLink :to="localePath(`/profile/assessments/${item._id}`)" class="text-blue-800"> Baholash </NuxtLink>
          </UiTableCell>
        </UiTableRow>
      </UiTableBody>
    </UiTable>
  </div>
</template>

<script setup>
  import { useApplicationStore } from "@/stores/application.js";

  definePageMeta({
    layout: "profile",
  });

  const localePath = useLocalePath();
  const applicationStore = useApplicationStore();

  const { getApplicationsUseAFilter } = applicationStore;

  const { locale } = useI18n();

  const { data } = await useAsyncData("assessments", async () => {
    return await getApplicationsUseAFilter({
      lang: locale.value,
      "filter[status]": 1,
    });
  });
</script>
