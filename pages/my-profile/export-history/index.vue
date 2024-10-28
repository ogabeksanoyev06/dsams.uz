<template>
  <div>
    <div class="relative w-full overflow-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-6 text-nowrap">
            <th class="p-4 text-left align-middle font-semibold text-sm">#</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">F.I.SH</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">Tashkilot</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">Sana va vaqt</th>
            <th class="p-4 text-left align-middle font-semibold text-sm">Ball</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-6" v-for="key in 3" :key="key">
            <td class="p-4 text-sm align-middle">{{ key }}</td>
            <td class="p-4 text-sm align-middle text-blue cursor-pointer">Sanoyev Odiljon Otabek o'g'li</td>
            <td class="p-4 text-sm align-middle text-blue cursor-pointer">TDIU</td>
            <td class="p-4 text-sm align-middle">18.10.2024 16:51:11 - 20.10.2024 14:55:56</td>
            <td class="p-4 text-sm align-middle">4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'profile',
})
</script>
