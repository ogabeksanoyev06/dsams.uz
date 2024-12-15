<template>
  <div>
    <div class="relative mb-4 flex w-fit flex-col items-center gap-1 max-sm:mx-auto sm:mb-6">
      <input @change="handleFile" id="file-avatar" type="file" class="pointer-events-none absolute h-0 w-0 opacity-0" accept=".jpg, .png, .jpeg, .svg" />
      <Transition name="fade" mode="out-in">
        <label for="file-avatar" class="group relative flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border sm:h-[92px] sm:w-[92px]">
          <template v-if="!image">
            <Icon name="lucide:camera" class="text-2xl leading-6 sm:text-3xl" />
          </template>
          <template v-else>
            <img :src="image" alt="Profil rasmi" class="h-full w-full object-cover" />
            <div class="flex-center transition-300 absolute inset-0 bg-black/60 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
              <span class="sr-only">Yuklash</span>
              <Icon name="lucide:upload-cloud" class="text-2xl leading-6 text-white" />
            </div>
          </template>
        </label>
      </Transition>
      <button v-if="image" @click="removeAvatar" class="text-xs font-medium leading-5 text-red-500">Avatarni o'chirish</button>
    </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div class="grid gap-1.5">
        <UiLabel for="email"> Email</UiLabel>
        <UiInput disabled id="email" placeholder="Email" v-model="values.email" :error="$v.email?.$error" />
      </div>
      <div class="grid gap-1.5">
        <UiLabel for="role"> Foydalanuvchi turi</UiLabel>
        <UiInput disabled id="role" placeholder="Foydalanuvchi turi" v-model="values.role" />
      </div>
      <div class="grid gap-1.5">
        <UiLabel for="name"> Ism</UiLabel>
        <UiInput id="name" placeholder="Ismingizni kiriting" v-model="values.name" :error="$v.name?.$error" />
      </div>
      <div class="grid gap-1.5">
        <UiLabel for="surname"> Familiya</UiLabel>
        <UiInput id="surname" placeholder="Familiyangizni kiriting" v-model="values.surname" :error="$v.surname?.$error" />
      </div>
      <div class="grid gap-1.5">
        <UiLabel for="father_name"> Ota nomi</UiLabel>
        <UiInput id="father_name" placeholder="Ota nomingizni kiriting" v-model="values.father_name" :error="$v.father_name?.$error" />
      </div>
      <div class="grid gap-1.5">
        <UiLabel for="phone_number">Telefon raqami</UiLabel>
        <div class="relative w-full">
          <UiInput id="phone_number" v-model="values.phone_number" class="pl-14" placeholder="Telefon raqami" :error="$v.phone_number?.$error" />
          <span class="absolute inset-y-0 start-0 flex h-10 items-center py-2 pl-3 text-sm leading-10">
            <span>+998</span>
          </span>
        </div>
      </div>
      <div class="grid gap-1.5">
        <UiLabel for="position"> Ish joyi</UiLabel>
        <UiInput id="position" placeholder="Ish joyingizni kiriting" v-model="values.position" :error="$v.position?.$error" />
      </div>
      <div class="grid gap-1.5">
        <UiLabel for="sex"> Jinsi</UiLabel>
        <UiSelect v-model="values.sex" :error="$v.sex?.$error">
          <UiSelectTrigger placeholder="Tanlang" />
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem value="male" text="Erkak" />
              <UiSelectItem value="female" text="Ayol" />
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </div>
    </div>
    <div class="mt-5 flex justify-end">
      <UiButton class="sm:w-full sm:max-w-[150px]" @click="handleSubmitForm" :loading="loading" text="Saqlash" />
    </div>
  </div>
</template>

<script setup>
  import { useCustomToast } from "@/composables/useCustomToast.js";
  import { useProfileStore } from "@/stores/profile";

  definePageMeta({
    layout: "profile",
  });

  const roleCookie = useCookie("role");

  const { showToast } = useCustomToast();

  const profileStore = useProfileStore();
  const { required, email, validPhoneNumber } = useTranslate();

  const { editProfileUser, editProfileExport } = profileStore;
  const { user } = storeToRefs(profileStore);

  const { values, $v } = useForm(
    {
      email: "",
      name: "",
      surname: "",
      father_name: "",
      phone_number: "",
      birth_date: "",
      position: "",
      sex: "",
      role: "",
    },
    {
      email: {
        required,
        email,
      },
      name: {
        required,
      },
      surname: {
        required,
      },
      father_name: {
        required,
      },
      phone_number: {
        required,
        validPhoneNumber,
      },
      position: {
        required,
      },
      sex: {
        required,
      },
    }
  );

  const image = ref(null);
  const loading = ref(false);

  if (user.value) {
    values.name = user.value.data?.name || "";
    values.surname = user.value.data?.surname || "";
    values.father_name = user.value.data?.father_name || "";
    values.phone_number = removePhonePrefix(user.value.data?.phone_number) || "";
    values.position = user.value.data?.position || "";
    values.sex = user.value.data?.sex || "";
    values.birth_date = user.value.data?.birth_date || "";
    values.email = user.value.data?.email || "";
    values.photo_url = user.value.data?.photo_url || "";
    values.role = getUserRole(roleCookie.value) || "";
  }

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        image.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = () => {
    image.value = null;
    const fileInput = document.getElementById("file-avatar");
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const handleSubmitForm = async () => {
    $v.value.$touch();
    if ($v.value.$invalid) return;
    try {
      loading.value = true;
      const profileData = {
        name: values.name,
        surname: values.surname,
        father_name: values.father_name,
        phone_number: "998" + values.phone_number,
        position: values.position,
        sex: values.sex,
        birth_date: values.birth_date,
      };
      let response;
      if (roleCookie.value === "user") {
        response = await editProfileUser(profileData);
      } else if (roleCookie.value === "export") {
        response = await editProfileExport(profileData);
      }
      if (response?.status) {
        showToast("Profil muvaffaqiyatli yangilandi", "success");
      }
    } catch (error) {
      showToast(error.response?.data?.message || "Xatolik yuz berdi", "error");
    } finally {
      loading.value = false;
    }
  };
</script>
