<template>
  <div ref="inputWrapper" class="phone-input relative">
    <hr class="absolute left-[3.5rem] top-2 h-[22px] border border-solid" />
    <VueTelInput
      ref="phoneInput"
      v-model="phone"
      :input-options="{
        placeholder,
        maxlength: maxlength,
        showDialCode: true,
      }"
      :disabled="readonly"
      default-country="uz"
      valid-characters-only
      :dropdownOptions="{
        disabledDialCode: true,
        showDialCodeInList: true,
        showFlags: true,
        showSearchBox: true,
      }"
      :class="{
        invalid: !valid,
        '!border-destructive !bg-destructive/10': error || invalidError,
      }"
      @validate="handleValidatedPhone"
    />
  </div>
</template>

<script setup>
  import "@/assets/css/vue-tel-input.css";

  import { useEventListener } from "@vueuse/core";
  import { onMounted, ref, watch } from "vue";
  import { VueTelInput } from "vue-tel-input";

  const props = defineProps({
    error: Boolean,
    modelValue: String,
    placeholder: String,
    loading: Boolean,
    readonly: Boolean,
    isLocal: Boolean,
    maxlength: Number,
  });

  const emit = defineEmits(["update:modelValue", "trigger", "blur", "reset-validation"]);

  // Reactive o'zgaruvchilar
  const valid = ref(false);
  const invalidError = ref(false);
  const phone = ref("");
  const phoneInput = ref(null);
  const inputWrapper = ref(null);

  // Backspace ni cheklash
  useEventListener(phoneInput, "keydown", (e) => {
    if (e.key === "Backspace" && phone.value === "+") {
      e.preventDefault();
    }
  });

  // Telefon raqamini kuzatish
  watch(
    () => phone.value,
    (value) => {
      emit("update:modelValue", value);
    }
  );

  // modelValue propsni kuzatish
  watch(
    () => props.modelValue,
    () => {
      phone.value = props.modelValue || "";
    },
    { immediate: true }
  );

  // Fokusda "+" belgisi qo'shish
  const onFocus = () => {
    if (phone.value?.length === 0) {
      emit("update:modelValue", "+998");
    }
  };

  // Blurda tekshirish
  const onBlur = () => {
    if (phone.value?.length === 1) {
      phone.value = "";
      setTimeout(() => {
        emit("reset-validation");
      }, 10);
    }
    setTimeout(() => emit("blur", phone.value), 500);
  };

  // Qayta kirgan ma'lumotlarni qayta ishlash
  const onPaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData?.getData("text/plain") || "";
    const hasDefaultPlus = phone.value.startsWith("+");
    const hasPastedPlus = pastedText.startsWith("+");

    phone.value = hasDefaultPlus ? (hasPastedPlus ? pastedText : `+${pastedText}`) : hasPastedPlus ? pastedText : `+${pastedText}`;
  };

  // Komponent o'rnatilganda
  onMounted(() => {
    const phoneInputElement = inputWrapper.value?.querySelector(".phone-input input");
    phoneInputElement.setAttribute("placeholder", props.placeholder || "");
    phoneInputElement.onblur = onBlur;
    phoneInputElement.onpaste = onPaste;
    if (props.modelValue) {
      phone.value = props.modelValue;
    }
  });

  // Telefon raqamini tasdiqlash
  function handleValidatedPhone(options) {
    valid.value = !!options?.countryCode || false;
    invalidError.value = !options.valid && !!options?.countryCode && options.formatted.length > String(options.number)?.length;
    emit("trigger", invalidError.value);
  }
</script>

<style>
  .phone-input .vue-tel-input {
    @apply h-10 w-full !rounded-md border border-input bg-background text-sm sm:text-base;
  }

  .phone-input .vti__input {
    @apply ml-2;
  }
  .phone-input .vti__dropdown {
    @apply rounded-bl-md rounded-tl-md;
  }

  .phone-input input {
    @apply bg-transparent py-2 pl-0 text-sm text-foreground;
  }

  .phone-input input::placeholder {
    @apply text-sm text-gray-400;
  }
</style>
