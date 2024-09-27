<template>
  <Teleport to="body">
    <div
      :class="[wrapperClass, { '!opacity-100 !visible': modelValue }]"
      data-modal="wrapper"
      class="fixed w-full h-full bg-[#151515]/80 flex justify-center z-[100] top-0 left-0 invisible opacity-0 transition-all duration-300 items-center p-3"
      @click="handleOuterClick"
    >
      <Transition name="modal" mode="out-in">
        <div
          v-if="modelValue"
          class="bg-white w-full lg:max-w-[382px] shadow-xl relative max-h-screen md:overflow-y-auto rounded-2xl"
          :class="[bodyClass, { animated: animationIn }]"
        >
          <!-- Header qismi -->
          <div
            v-if="!noHeader"
            class="flex items-center border-b border-solid border-[#D7D7D7] mx-5 pb-5 pt-4 rounded-t-2xl"
            :class="headerStyle"
          >
            <slot name="header">
              <h3
                class="w-full text-base md:text-2xl leading-130 text-[#121C25] font-bold font-mts"
                :class="titleStyle"
              >
                {{ title }}
              </h3>
              <button
                class="text-[28px] leading-7 w-7 h-7 rounded-full text-white shrink-0 flex-center transition-300 hover:bg-transparent active:scale-95 group"
                @click="$emit('update:modelValue', false)"
              >
                <SvgoXMark
                  class="text-[#ABABAF] group-hover:text-red transition-300"
                />
              </button>
            </slot>
          </div>

          <!-- Agar header bo‘lmasa, faqat close icon qo‘yiladi -->
          <button
            v-if="noHeader && hasCloseIcon"
            class="absolute -top-7 lg:-top-12 -right-0 lg:-right-[80px] active:scale-95 group"
            @click="$emit('update:modelValue', false)"
          >
            <span
              class="icon-x-mark text-[32px] icon-close text-white group-hover:text-blue transition-300"
            ></span>
          </button>

          <!-- Asosiy content -->
          <slot />
          <slot name="footer" />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

// Propslarni define qilish
const props = withDefaults(
  defineProps({
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: 'Modal title' },
    wrapperClass: { type: [String, Array], default: '' },
    modalClass: { type: [String, Array], default: '' },
    noHeader: { type: Boolean, default: false },
    disableOuterClose: { type: Boolean, default: false },
    bodyClass: { type: [String, Array], default: '' },
    hasCloseIcon: { type: Boolean, default: true },
    titleStyle: { type: String, default: '' },
    headerStyle: { type: String, default: '' },
  }),
  {
    title: 'Modal title',
    wrapperClass: '',
    modalClass: '',
    bodyClass: '',
  },
)

// Emits funksiyalarni tayyorlash
const emit = defineEmits(['update:modelValue', 'outer-click'])

// Animation uchun state
const animationIn = ref(false)

// Modal tashqarisiga bosilganda chaqiriladigan funksiya
function handleOuterClick(e) {
  const target = e.target
  if (target.dataset?.modal == 'wrapper') {
    emit('outer-click')
    if (!props.disableOuterClose) {
      emit('update:modelValue', false)
    } else {
      animationIn.value = true
      setTimeout(() => {
        animationIn.value = false
      }, 500)
    }
  }
}

// `modelValue` ni kuzatish
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  },
)

// Modal komponenti ishga tushganda hodisalarni eshitish
onMounted(() => {
  //   Example: `Escape` tugmasi bilan modalni yopish
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !props.disableOuterClose) {
      emit('update:modelValue', false)
    }
  })
})
</script>

<style scoped>
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-enter-active {
  animation: modal 0.3s ease-in-out;
}
.modal-leave-active {
  animation: modal 0.3s ease-in-out reverse;
}

@keyframes mobile-modal {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-modal-enter-active {
  animation: mobile-modal 0.5s ease-in-out;
}
.mobile-modal-leave-active {
  animation: mobile-modal 0.5s ease-in-out reverse;
}

.animated {
  animation: horizontal-shaking 0.4s ease-in-out;
}
</style>
