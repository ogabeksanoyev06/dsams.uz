<script setup>
definePageMeta({
  layout: 'profile',
})

const editProfileModal = ref(false)
const editEmailModal = ref(false)
</script>

<template>
  <div>
    <div class="flex items-center gap-6 mb-6">
      <div class="flex-y-center w-fit flex-col gap-1 relative">
        <input id="input_9" type="file" name="file" class="w-0 h-0 absolute" accept="image/png, image/jpeg, image/webp" />
        <div class="w-[92px] h-[92px] shrink-0 rounded-full border border-yellow relative overflow-hidden flex-center cursor-pointer group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="text-lg w-8 h-8">
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M11.334 5.25a.083.083 0 0 0-.083.083A3.917 3.917 0 0 1 7.334 9.25H6.001a1.417 1.417 0 0 0-1.417 1.417v12a1.417 1.417 0 0 0 1.417 1.416h9.333a1.25 1.25 0 0 1 0 2.5H6.001a3.917 3.917 0 0 1-3.917-3.916v-12A3.917 3.917 0 0 1 6.001 6.75h1.333a1.417 1.417 0 0 0 1.417-1.417 2.583 2.583 0 0 1 2.583-2.583h8a2.583 2.583 0 0 1 2.583 2.583 1.417 1.417 0 0 0 1.417 1.417h1.333a3.917 3.917 0 0 1 3.917 3.917v4.666a1.25 1.25 0 0 1-2.5 0v-4.666a1.417 1.417 0 0 0-1.417-1.417h-1.333a3.917 3.917 0 0 1-3.917-3.917.083.083 0 0 0-.083-.083h-8Zm.288 7.038a5.25 5.25 0 1 1 7.424 7.424 5.25 5.25 0 0 1-7.424-7.424Zm3.712.962a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm9.333 5.5c.69 0 1.25.56 1.25 1.25v2.75h2.75a1.25 1.25 0 1 1 0 2.5h-2.75V28a1.25 1.25 0 1 1-2.5 0v-2.75h-2.75a1.25 1.25 0 0 1 0-2.5h2.75V20c0-.69.56-1.25 1.25-1.25Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="text-xl font-semibold">Odiljon Sanoyev</h3>
        <p class="flex items-center gap-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M14.6473 12.72C14.6473 12.96 14.594 13.2067 14.4807 13.4467C14.3673 13.6867 14.2207 13.9133 14.0273 14.1267C13.7007 14.4867 13.3407 14.7467 12.934 14.9133C12.534 15.08 12.1007 15.1667 11.634 15.1667C10.954 15.1667 10.2273 15.0067 9.46065 14.68C8.69398 14.3533 7.92732 13.9133 7.16732 13.36C6.40065 12.8 5.67398 12.18 4.98065 11.4933C4.29398 10.8 3.67398 10.0733 3.12065 9.31333C2.57398 8.55333 2.13398 7.79333 1.81398 7.04C1.49398 6.28 1.33398 5.55333 1.33398 4.85999C1.33398 4.40666 1.41398 3.97333 1.57398 3.57333C1.73398 3.16666 1.98732 2.79333 2.34065 2.45999C2.76732 2.03999 3.23398 1.83333 3.72732 1.83333C3.91398 1.83333 4.10065 1.87333 4.26732 1.95333C4.44065 2.03333 4.59398 2.15333 4.71398 2.32666L6.26065 4.50666C6.38065 4.67333 6.46732 4.82666 6.52732 4.97333C6.58732 5.11333 6.62065 5.25333 6.62065 5.38C6.62065 5.54 6.57398 5.69999 6.48065 5.85333C6.39398 6.00666 6.26732 6.16666 6.10732 6.32666L5.60065 6.85333C5.52732 6.92666 5.49398 7.01333 5.49398 7.12C5.49398 7.17333 5.50065 7.21999 5.51398 7.27333C5.53398 7.32666 5.55398 7.36666 5.56732 7.40666C5.68732 7.62666 5.89398 7.91333 6.18732 8.26C6.48732 8.60666 6.80732 8.96 7.15398 9.31333C7.51398 9.66666 7.86065 9.99333 8.21398 10.2933C8.56065 10.5867 8.84732 10.7867 9.07398 10.9067C9.10732 10.92 9.14732 10.94 9.19398 10.96C9.24732 10.98 9.30065 10.9867 9.36065 10.9867C9.47398 10.9867 9.56065 10.9467 9.63398 10.8733L10.1407 10.3733C10.3073 10.2067 10.4673 10.08 10.6207 10C10.774 9.90666 10.9273 9.86 11.094 9.86C11.2207 9.86 11.354 9.88666 11.5007 9.94666C11.6473 10.0067 11.8007 10.0933 11.9673 10.2067L14.174 11.7733C14.3473 11.8933 14.4673 12.0333 14.5407 12.2C14.6073 12.3667 14.6473 12.5333 14.6473 12.72Z"
                stroke="#4B5970"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </span>
          +998 (93) 472 93 35
        </p>
      </div>
    </div>
    <VForm>
      <div class="grid gap-10">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-6">
            <VField name="name">
              <FormGroup label="Ism" for-id="name">
                <FormInput placeholder="Ism" id="name" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="name">
              <FormGroup label="Familiya" for-id="surname">
                <FormInput placeholder="Familiya" id="surname" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="name">
              <FormGroup label="Otasining ismi" for-id="father_name">
                <FormInput placeholder="Otasining ismi" id="father_name" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="name">
              <FormGroup label="Email" for-id="father_name">
                <FormInput disabled suffix placeholder="exam@gmail.com" id="father_name" type="email">
                  <template #suffix>
                    <button type="button" @click="editEmailModal = true">
                      <span class="icon-edit text-xl"></span>
                    </button>
                  </template>
                </FormInput>
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="phone">
              <FormGroup label="Telefon raqam" for-id="father_name">
                <FormInput suffix disabled placeholder="+998 93 081 91 40" id="father_name">
                  <template #suffix>
                    <button type="button" @click="editProfileModal = true">
                      <span class="icon-edit text-xl"></span>
                    </button>
                  </template>
                </FormInput>
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-6">
            <VField name="phone">
              <FormGroup label="Lavozim" for-id="father_name">
                <FormInput placeholder="Lavozim" id="father_name" />
              </FormGroup>
            </VField>
          </div>
          <div class="col-span-12">
            <VField name="name">
              <FormGroup label="Foylanuvchi nomi (username)" for-id="father_name">
                <FormInput placeholder="Foylanuvchi nomi (username)" id="father_name" />
              </FormGroup>
            </VField>
          </div>
        </div>
        <div class="w-full flex justify-end">
          <UIButton text="Saqlash" wrapper-class=" !max-w-[200px] w-full" />
        </div>
      </div>
    </VForm>
    <ModalProfileEditPhone v-model="editProfileModal" />
    <ModalProfileEditEmail v-model="editEmailModal" />
  </div>
</template>
