<template>
  <div class="mt-5">
    <h2 class="font-bold text-lg sm:text-xl mb-5">Savollar</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <FormGroup label="Sektor" for-id="email">
        <FormSelect :options="selectData" label-key="title" value-key="id" placeholder="Sektorni tanlang" />
      </FormGroup>
      <FormGroup label="Satandart" for-id="email">
        <FormSelect :options="selectData" label-key="title" value-key="id" placeholder="Satandartni tanlang" />
      </FormGroup>
    </div>
    <VForm>
      <div class="mt-10">
        <div>
          <div class="" v-for="key in 10" :key>
            <h3 class="font-semibold text-base mb-2">{{ key }}. Mos keluvchi faylni yuklang.</h3>
            <p class="text-gray-5 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, a delectus. Deserunt possimus blanditiis odit sunt modi ducimus alias, aperiam dignissimos repellat non beatae fugit fuga dolorum nobis voluptate! Cumque.
            </p>
            <div class="flex justify-end">
              <VField name="region">
                <FormGroup label="Faylni yuklang" info-label="Maks: 10 Mb">
                  <FormFileInput v-model="file" />
                </FormGroup>
              </VField>
            </div>
          </div>
        </div>
        <!-- <div class="w-full flex justify-end mt-4">
          <UIButton text="Saqlash" wrapper-class=" !max-w-[200px] w-full" />
        </div> -->
      </div>
    </VForm>
  </div>
</template>

<script setup>
const form = reactive({})

const file = ref('')
</script>
