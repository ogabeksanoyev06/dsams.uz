<template>
  <div>
    <div class="relative w-full overflow-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-6 text-nowrap">
            <th class="p-4 text-left align-middle font-semibold text-sm">#</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">F.I.SH</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">Eksport</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">Javob yo'llagan</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">Sana va vaqt</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-6" v-for="key in 1" :key="key">
            <td class="p-4 text-sm align-middle">{{ key }}</td>
            <td class="p-4 text-sm align-middle text-blue cursor-pointer" @click="isModal = true">Odiljon Sanoyev Otabek o'g'li</td>
            <td class="p-4 text-sm align-middle">Bosh eksport</td>
            <td class="p-4 text-sm align-middle text-green-500">Ha</td>
            <td class="p-4 text-sm align-middle">18.10.2024 16:51:11 - 20.10.2024 14:55:56</td>
          </tr>
          <tr class="border-b border-gray-6" v-for="key in 3" :key="key">
            <td class="p-4 text-sm align-middle">{{ key }}</td>
            <td class="p-4 text-sm align-middle text-blue cursor-pointer">Odiljon Sanoyev Otabek o'g'li</td>
            <td class="p-4 text-sm align-middle">Eksport</td>
            <td class="p-4 text-sm align-middle text-red-500">Yo'q</td>
            <td class="p-4 text-sm align-middle">18.10.2024 16:51:11 - 20.10.2024 14:55:56</td>
          </tr>
        </tbody>
      </table>
    </div>

    <ModalProfileExportInfo v-model="isModal" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'profile',
})

const isModal = ref(false)
</script>
