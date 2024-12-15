<template>
  <div class="overflow-x-auto rounded-md border bg-background pb-4">
    <UiTable class="w-full">
      <UiTableHeader>
        <UiTableRow>
          <UiTableHead>#</UiTableHead>
          <UiTableHead>Tashkilot</UiTableHead>
          <UiTableHead>Direktor</UiTableHead>
          <UiTableHead>Real Manzil</UiTableHead>
          <UiTableHead>Telefon</UiTableHead>
          <UiTableHead>Email</UiTableHead>
          <UiTableHead>Vebsayt</UiTableHead>
          <UiTableHead>Ball</UiTableHead>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody v-if="data?.data?.length > 0" class="last:border-b">
        <UiTableRow>
          <UiTableCell class="font-medium">1</UiTableCell>
          <UiTableCell>{{ company.name }}</UiTableCell>
          <UiTableCell>{{ company.director }}</UiTableCell>
          <UiTableCell>{{ company.real_address }}</UiTableCell>
          <UiTableCell>+{{ company.phone_number }}</UiTableCell>
          <UiTableCell>{{ company.email }}</UiTableCell>
          <UiTableCell>
            <a :href="'https://' + company.website" target="_blank" class="text-blue-500 underline">
              {{ company.website }}
            </a>
          </UiTableCell>
          <UiTableCell class="text-right">5</UiTableCell>
        </UiTableRow>
      </UiTableBody>
      <UiTableCaption v-else>Ma'lumotlar topilmadi</UiTableCaption>
    </UiTable>
  </div>
</template>

<script setup>
  defineProps({
    data: {
      type: Object,
    },
  });

  const company = {
    name: "Tech Innovations LLC",
    yur_address: "123 Business Rd, Suite 100, Tech City, TC 12345",
    real_address: "456 Real St, Tech City, TC 12345",
    phone_number: "1234567890",
    inn: "1234567890",
    email: "contact@techinnovations.com",
    website: "www.techinnovations.com",
    director: "John Doe",
    workers: "50",
  };
</script>

<style scoped>
  .text-right {
    text-align: right;
  }
  .font-medium {
    font-weight: 500;
  }
  .text-blue-500 {
    color: #3b82f6;
  }
  .underline {
    text-decoration: underline;
  }
</style>
