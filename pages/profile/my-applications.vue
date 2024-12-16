<template>
  <div class="w-full overflow-x-auto rounded-md border">
    <UiTable>
      <UiTableHeader>
        <UiTableRow>
          <UiTableHead>#</UiTableHead>
          <UiTableHead>Email</UiTableHead>
          <UiTableHead>F.I.SH</UiTableHead>
          <UiTableHead>Telefon raqam</UiTableHead>
          <UiTableHead>Yaratilgan muddat</UiTableHead>
          <UiTableHead>Ariza holati</UiTableHead>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody class="last:border-b-0">
        <UiTableRow v-for="(exp, key) in data.data" :key>
          <UiTableCell> {{ key + 1 }} </UiTableCell>
          <UiTableCell> {{ exp.user.email }} </UiTableCell>
          <UiTableCell> {{ exp.user.surname }} {{ exp.user.name }} {{ exp.user.father_name }} </UiTableCell>
          <UiTableCell>
            <a :href="`tel:${exp.company.phone_number}`">
              {{ exp.company.phone_number }}
            </a>
          </UiTableCell>
          <UiTableCell> {{ $dayjs(exp.createdAt).format("DD.MM.YYYY") }}</UiTableCell>
          <UiTableCell>
            <span :class="getStatusClass(exp.status)">
              {{ getStatusText(exp.status) }}
            </span>
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

  const applicationStore = useApplicationStore();

  const { getAllApplications } = applicationStore;

  const localePath = useLocalePath();
  const { locale } = useI18n();

  const getStatusClass = (status) => {
    switch (status) {
      case 0:
        return "text-red-500";
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-blue-500";
      case 3:
        return "text-green-500";
      case -1:
        return "text-gray-500";
      default:
        return "";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return "Kutilmoqda";
      case 1:
        return "Tasdiqlangan";
      case 2:
        return "Ekspert tasdiqlash";
      case 3:
        return "Yakunlangan";
      case -1:
        return "Bekor qilingan";
      default:
        return "";
    }
  };

  const { data } = await useAsyncData("my_application", async () => {
    return await getAllApplications();
  });
</script>
