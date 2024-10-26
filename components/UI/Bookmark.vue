<script setup>
const props = defineProps({
  isSaved: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    default: null,
  },
  pathClass: {
    type: String,
    default: '',
  },
  pathActiveClass: {
    type: String,
    default: '',
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
})

const saved = ref(props.isSaved)

function saveBookmark() {
  //
}
</script>

<template>
  <button @click.stop="saveBookmark">
    <svg :width="width ?? 24" :height="height ?? 24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        :class="saved ? `fill-primary stroke-primary ${pathActiveClass ?? ''}` : `stroke-gray-200 ${pathClass ?? ''}`"
        class="transition-all duration-300"
        d="M8 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6V20L12 17L6 20V6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>
