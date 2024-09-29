<template>
  <div class="relative" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop" @dragenter.prevent="handleDragEnter" @dragleave.prevent="handleDragLeave">
    <div
      class="flex items-center cursor-pointer gap-1.5 border border-dashed border-primary bg-white rounded-lg p-2.5 relative"
      :class="[
        {
          '!border-danger': error,
          '!border-dashed': dragging,
          '!border-dashed': dashed,
        },
      ]"
      @click="getFile"
    >
      <Transition name="fade" mode="out-in">
        <SvgoFile v-if="media.file" class="text-2xl leading-6 text-primary" />
        <SvgoLink v-else class="text-2xl leading-6 text-primary" />
      </Transition>
      <div v-if="media.file" class="flex-y-center">
        <p class="font-bold text-[#151515] leading-130 text-sm transition-300">
          {{ media.media }}
        </p>
      </div>
      <span
        v-else
        class="font-bold text-[#151515] leading-130 text-sm transition-300"
        :class="{
          '!text-red': dragging,
        }"
      >
        {{ modelValue || dragging ? $t('drop_file_here') : $t('add_file') }}
      </span>
    </div>
    <input id="media" ref="mediaInput" :accept="accept" class="w-0 h-0 absolute opacity-0" :multiple="multiple" name="file" type="file" @change="handleFile" @click="$event.target.value = ''" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  modelValue: [Object, String, File],
  accept: {
    type: String,
    default: 'image/*, pdf/*',
  },
  error: Boolean,
  dashed: Boolean,
  multiple: Boolean,
  maxSize: {
    type: Number,
    default: 1024 * 1024 * 10,
  },
})

const emit = defineEmits(['update:modelValue', 'error'])

const isMaxSize = ref(false)
const mediaInput = ref(null)
const btnClearer = ref(false)
const media = reactive({
  media: '',
  file: null,
})
const currentTarget = ref(null)

const handleFile = (event) => {
  const target = event.target
  if (target?.files) {
    handleUploader(target)
  }
}

const handleUploader = (target) => {
  const file = target.files?.[0]
  if (file?.size > props.maxSize) {
    isMaxSize.value = true
    emit('error', true)
    return
  }
  emit('error', false)

  const reader = new FileReader()
  reader.onload = () => {
    media.media = file?.name
    media.file = file
    emit('update:modelValue', file)
  }
  reader.readAsDataURL(file)
}

const getFile = () => {
  mediaInput.value?.click()
}

const clearForm = () => {
  media.file = null
  media.media = ''
  emit('update:modelValue', '')
}

const btnHandler = () => {
  if (media.media && media.file) {
    clearForm()
  } else {
    getFile()
  }
}

watch(
  () => media.media,
  (val) => {
    if (!val) {
      clearForm()
    }
  },
)

const dragging = ref(false)

const handleDragOver = (event) => {
  event.preventDefault()
}

const handleDragEnter = (e) => {
  dragging.value = true
  currentTarget.value = e.target
}

const handleDragLeave = (e) => {
  if (e.target === currentTarget.value) {
    currentTarget.value = null
    dragging.value = false
  }
}

const handleDrop = (event) => {
  event.preventDefault()
  dragging.value = false
  if (event.dataTransfer?.items) {
    handleUploader(event.dataTransfer)
  }
}

onMounted(() => {
  if (typeof props.modelValue === 'object') {
    media.media = props.modelValue?.name
    media.file = props.modelValue
  } else {
    media.media = props.modelValue
  }
})
</script>
