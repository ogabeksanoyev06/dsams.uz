<template>
  <div class="relative" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop" @dragenter.prevent="handleDragEnter" @dragleave.prevent="handleDragLeave">
    <div
      class="relative flex items-center justify-between gap-2 rounded-xl border border-input bg-muted/50 p-1 pl-3"
      :class="{
        '!border-destructive': error,
        '!border-dashed !border-destructive': dragging,
        '!border-dashed': dashed,
      }"
    >
      <!-- Fayl yuklangan holat -->
      <div v-if="media.file" class="flex-y-center">
        <p class="leading-130 text-sm font-medium">
          {{ media.media }}
        </p>
      </div>

      <!-- Fayl yuklanmagan holat -->
      <span
        v-else
        class="leading-130 transition-300 line-clamp-1 text-sm font-medium"
        :class="{
          '!text-destructive': dragging,
        }"
      >
        {{ modelValue || dragging ? "Faylni shu yerga tashlang" : "Faylni bu yerga torting yoki faylni tanlang" }}
      </span>

      <!-- Tugma: Fayl yuklash yoki o'chirish -->
      <UiButton size="sm" @click="getFile">
        <Icon name="lucide:upload" class="h-4 w-4" />
        <!-- <Icon name="lucide:trash-2" class="h-4 w-4" v-else /> -->
      </UiButton>
    </div>

    <!-- Fayl tanlash uchun yashirin input -->
    <input id="media" ref="mediaInput" :accept="accept" class="absolute h-0 w-0 opacity-0" multiple name="file" type="file" @change="handleFile" @click="$event.target.value = ''" />
  </div>
</template>

<script setup>
  // Vue composables
  import { onMounted, reactive, ref, watch } from "vue";

  // Props va Emitted hodisalarni aniqlash
  const props = defineProps({
    label: String,
    placeholder: String,
    dashed: Boolean,
    modelValue: [Object, String, File],
    accept: {
      type: String,
      default: "image/*, pdf/*, doc/*, docx/*, xls/*, xlsx/*, ppt/*, pptx/*, txt/*, csv/*",
    },
    error: Boolean,
    questionId: String, // Agar mavjud bo'lsa, faylga bog'liq identifikatsiya qilish uchun ishlatiladi
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 10, // Maksimal fayl hajmi (10MB)
    },
  });

  const emit = defineEmits(["update:modelValue", "error"]);

  // Reaktiv o'zgaruvchilar
  const isMaxSize = ref(false); // Fayl hajmi oshganligini tekshirish
  const mediaInput = ref(null); // Input element
  const btnClearer = ref(false); // Tugmaning holati (tozalash/yuklash)
  const dragging = ref(false); // Drag holati
  const currentTarget = ref(null); // Drag target

  const media = reactive({
    media: "", // Fayl nomi
    file: null, // Fayl obyekti
  });

  // Faylni yuklash (input orqali)
  const handleFile = (event) => {
    const target = event?.target;
    if (target?.files) {
      handleUploader(target.files[0]);
    }
  };

  // Faylni yuklash (drag & drop yoki input orqali)
  const handleUploader = (file) => {
    if (file?.size > props.maxSize) {
      // Fayl hajmi limitdan oshgan
      isMaxSize.value = true;
      emit("error", true);
      return;
    }
    emit("error", false);

    const reader = new FileReader();
    reader.onload = () => {
      media.media = file.name;
      media.file = file;
      if (props.questionId) {
        emit("update:modelValue", { questionId: props.questionId, file });
      } else {
        emit("update:modelValue", file);
      }
    };
    reader.readAsDataURL(file);
  };

  // Faylni tanlash uchun inputni chaqirish
  const getFile = () => {
    mediaInput.value?.click();
  };

  // Faylni tozalash
  const clearForm = () => {
    media.file = null;
    media.media = "";
    emit("update:modelValue", "");
  };

  // Tugma bosilganda bajariladigan ishlar
  const btnHandler = () => {
    if (media.file) {
      clearForm();
    } else {
      getFile();
    }
  };

  // Drag hodisalari boshqaruvi
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (e) => {
    dragging.value = true;
    currentTarget.value = e.target;
  };

  const handleDragLeave = (e) => {
    if (e.target === currentTarget.value) {
      dragging.value = false;
      currentTarget.value = null;
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    dragging.value = false;
    const file = event.dataTransfer?.files[0];
    if (file) {
      handleUploader(file);
    }
  };

  // Fayl holatini kuzatish
  watch(
    () => media.media,
    (val) => {
      btnClearer.value = !!media.file;

      if (!val) {
        clearForm();
      }
    }
  );

  // Komponentni o'rnatishda boshlang'ich qiymatni tekshirish
  onMounted(() => {
    if (props.modelValue) {
      media.media = props.modelValue;
    }
  });
</script>
