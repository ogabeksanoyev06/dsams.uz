<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
      <div>
        <UITab :model-value="tab" :list="tabList" @update:model-value="changeTab" />
      </div>
      <FormInput wrapperClass="!bg-gray-1" placeholder="Qidirish...">
        <template #prefix>
          <span class="icon-search text-lg"></span>
        </template>
      </FormInput>
    </div>
    <Transition name="fade" mode="out-in">
      <div class="relative w-full overflow-auto" v-if="tab === 0">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-1">
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm"></th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Fish</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Ish joyi</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Sertifikat raqami</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Davlat reestri raqami</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Berilgan sana</th>
              <th class="h-8 py-2 px-4 text-right align-middle font-normal text-sm">Amal qilish muddati</th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-16 even:bg-gray-1" v-for="key in 10" :key="key">
              <td class="p-4 text-sm align-middle font-medium leading-130">
                <FormCheckbox :checked="generalExportList.includes(key)" @update:model-value="updateGeneralExport(key, $event)" />
              </td>
              <td class="p-4 text-sm align-middle font-medium leading-130">Odiljon Sanoyev</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">TDIU</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">12AS34267</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">12AS34267</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">2024.10.05</td>
              <td class="p-4 text-sm align-middle font-medium leading-130 text-right">2024.10.05</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="relative w-full overflow-auto" v-else>
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-1">
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm"></th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Fish</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Ish joyi</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Sertifikat raqami</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Davlat reestri raqami</th>
              <th class="h-8 py-2 px-4 text-left align-middle font-normal text-sm">Berilgan sana</th>
              <th class="h-8 py-2 px-4 text-right align-middle font-normal text-sm">Amal qilish muddati</th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-16 even:bg-gray-1" v-for="key in 10" :key="key">
              <td class="p-4 text-sm align-middle font-medium leading-130">
                <FormCheckbox :checked="exportList.includes(key)" @update:model-value="updateExport(key, $event)" />
              </td>
              <td class="p-4 text-sm align-middle font-medium leading-130">Odiljon Sanoyev</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">TDIU</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">12AS34267</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">12AS34267</td>
              <td class="p-4 text-sm align-middle font-medium leading-130">2024.10.05</td>
              <td class="p-4 text-sm align-middle font-medium leading-130 text-right">2024.10.05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const tabList = [
  {
    name: 'Bosh exportlar',
    id: 0,
  },
  {
    name: 'Exportlar',
    id: 1,
  },
]

const tab = ref(tabList[0].id)

const changeTab = (id) => {
  tab.value = id
}

const generalExportList = ref([])
const exportList = ref([])

const updateGeneralExport = (id, checked) => {
  if (checked) {
    if (!generalExportList.value.includes(id)) {
      generalExportList.value.push(id)
    }
  } else {
    generalExportList.value = generalExportList.value.filter((item) => item !== id)
  }
}

const updateExport = (id, checked) => {
  if (checked) {
    if (!exportList.value.includes(id)) {
      exportList.value.push(id)
    }
  } else {
    exportList.value = exportList.value.filter((item) => item !== id)
  }
}
</script>
