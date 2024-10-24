<script setup>
const notificationModal = ref(false)
</script>

<template>
  <UIButton text="Ariza qoldirish" wrapperClass="!py-[7px] px-0 max-w-[150px] w-full !rounded-lg shadow-yellow-1 border-[1.5px] border-white/[0.12]" @click="notificationModal = true" />
  <ModalApplicationNotification v-model="notificationModal" />
</template>
