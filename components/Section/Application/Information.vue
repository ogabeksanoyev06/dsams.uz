<template>
  <div class="mt-5">
    <h2 class="font-bold text-lg sm:text-xl mb-5">Ma‘lumotlar</h2>
    <VForm>
      <div class="grid gap-10">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-12">
            <VField name="region">
              <FormGroup label="Tashkilot nomini kiriting" for-id="email">
                <FormInput placeholder="Tashkilot nomini kiriting" id="email" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-12">
            <VField name="region">
              <FormGroup label="Yuridik manzilni kiriting" for-id="email">
                <FormInput placeholder="Yuridik manzilni kiriting" id="email" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-12">
            <VField name="region">
              <FormGroup label="Haqiqiy manzilni kiriting" for-id="email">
                <FormInput placeholder="Haqiqiy manzilni kiriting" id="email" />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Telefon raqam" for-id="email">
                <FormPhone placeholder="Telefon raqam" id="email" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Tashkilot INN" for-id="email">
                <FormInput placeholder="Tashkilot INN" id="email" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Email" for-id="email">
                <FormInput placeholder="Email" id="email" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Veb sayt" for-id="email">
                <FormInput placeholder="Veb sayt" id="email" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="MFO" for-id="email">
                <FormInput placeholder="MFO" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Tashkilot turi" for-id="email">
                <FormSelect :options="selectData" label-key="title" value-key="id" placeholder="Tashkilot turi" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-12">
            <VField name="region">
              <FormGroup label="Tashkilot bank hisob raqami" for-id="email">
                <FormTextarea placeholder="Tashkilot bank hisob raqami" id="email" rows="5" />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-12">
            <VField name="region">
              <FormGroup label="Tashkilot direktori F.I.Sh." for-id="email">
                <FormInput placeholder="Tashkilot direktori F.I.Sh." />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-12">
            <VField name="region">
              <FormGroup label="Biriktirilgan vakil F.I.SH va lavozimi" for-id="email">
                <FormInput placeholder="Biriktirilgan vakil F.I.SH va lavozimi" />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-12 my-4">
            <h2 class="font-bold text-lg sm:text-xl">Tashkilotning tuzilishi va faoliyati xodimlarining soni</h2>
          </div>

          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Xodimlarning umumiy soni" for-id="email">
                <FormInput placeholder="Xodimlarning umumiy soni" type="number" />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Vaqtinchalik ishchilar soni" for-id="email">
                <FormInput placeholder="Vaqtinchalik ishchilar soni" type="number" />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Standart ish vaqti (soat)" for-id="email">
                <FormInput placeholder="Standart ish vaqti (soat)" type="number" />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Smenada ishlaydigan xodimlar soni" for-id="email">
                <FormInput placeholder="Smenada ishlaydigan xodimlar soni" type="number" />
              </FormGroup>
            </VField>
          </div>

          <div class="col-span-12 my-4">
            <h2 class="font-bold text-lg sm:text-xl">Tashkilotning tekshirishga tayyor bo'lish muddati. Dastlabki baholashni o'tkazish uchun taklif qilingan muddat (agar kerak bo'lsa)</h2>
          </div>
          <div class="col-span-6">
            <VField name="region">
              <FormGroup label="Muddat" for-id="email">
                <FormDatePicker range v-model="dateData" placeholder="Muddat" type="number" />
              </FormGroup>
            </VField>
          </div>
        </div>
      </div>
    </VForm>
  </div>
</template>

<script setup>
const form = reactive({})
const dateData = ref('')
</script>
