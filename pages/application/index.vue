<template>
  <div>
    <UIBreadcrumb :breadcrumb="breadcrumb" />
    <div class="py-8 container">
      <h2 class="font-bold text-xl sm:text-2xl mb-8">Ariza qoldirish</h2>
      <div class="bg-white border border-gray-1 shadow-card-2 rounded-xl transition-300 p-5 relative z-10">
        <div class="absolute bg-gray-6 h-2 w-full top-0 left-0"></div>
        <div class="absolute bg-yellow h-2 top-0 left-0 transition-all duration-300" :style="{ width: progressWidth }"></div>

        <Transition name="fade" mode="out-in">
          <SectionApplicationInformation v-if="currentStep === 1" />
          <SectionApplicationQuestions v-else-if="currentStep === 2" />
          <SectionApplicationExports v-else-if="currentStep === 3" />
        </Transition>

        <div class="flex items-center justify-between border-t border-gray-1 pt-5 mt-4">
          <UIButton text="Orqaga" iconLeft="icon-arrow-left max-md:text-xs" wrapperClass="md:w-[200px]" @click="prevStep" :disabled="currentStep === 1" />
          <UIButton text="Keyingi" icon="icon-arrow-right max-md:text-xs" wrapperClass="md:w-[200px]" @click="nextStep" :disabled="currentStep === totalSteps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const breadcrumb = [
  {
    title: 'Ariza qoldirish',
    link: '/application',
  },
]

const currentStep = ref(1)
const totalSteps = 3

const progressWidth = computed(() => {
  return `${(currentStep.value / totalSteps) * 100}%`
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToTop()
  }
}

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
    scrollToTop()
  }
}
</script>
