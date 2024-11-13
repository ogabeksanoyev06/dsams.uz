<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { useCustomToast } from '@/composables/useCustomToast.js'

defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const { showToast } = useCustomToast()

const localePath = useLocalePath()
const router = useRouter()

const accessToken = useCookie('access')

const authStore = useAuthStore()
const { login, verifyCode } = authStore

const step = ref(1)
const loading = ref(false)

const uuid = ref('')

const form = reactive({
  email: '',
  otp: '',
})

const handleSubmitForm = () => {
  if (step.value === 1) {
    sendCode()
    console.log('sasas')
  } else {
    handleVerifyCode()
  }
}

const sendCode = async () => {
  loading.value = true
  try {
    const response = await login({ email: form.email })
    console.log(response)
    if (response.status) {
      step.value = 2
      uuid.value = response.data.uuid
    }
  } catch (error) {
    showToast(error.response.data.message, 'error')
  } finally {
    loading.value = false
  }
}

const handleVerifyCode = async (form) => {
  loading.value = true
  try {
    const response = await verifyCode({ code: form.otm })
    if (response.status) {
      accessToken.value = response.data.access_token
      router.push(localePath('/'))
    }
  } catch (error) {
    showToast(error.response.data.message, 'error')
  } finally {
    loading.value = false
  }
}

const timer = ref(true)

function timeout() {
  timer.value = false
}
</script>

<template>
  <UIModal disableOuterClose :model-value title="Avtorizatsiya" @update:model-value="emit('update:modelValue', $event)">
    <VForm @submit="handleSubmitForm" v-slot="{ errors }">
      <div class="pt-4 p-5">
        <Transition name="fade" mode="out-in">
          <VField name="email" rules="required|email" v-model="form.email" v-if="step === 1">
            <FormGroup label="Elektron pochtangizni kiriting" for-id="email">
              <FormInput id="email" v-model="form.email" placeholder="Elektron pochtangizni kiriting" type="email" :error="!!errors.email" />
            </FormGroup>
          </VField>
          <div v-else>
            <p class="text-sm leading-5 text-gray-300 mb-3 whitespace-pre-line">SMS-dan tasdiqlash kodini kiriting. Tasdiqlash kodi emailga yuborildi</p>
            <button class="text-sm leading-130 text-dark font-medium px-2 py-1 rounded-lg border border-transparent bg-gray-1 flex items-center gap-1.5 transition-300 hover:border-yellow group" @click="step = 1">
              {{ form.email }}
              <span class="icon-edit text-lg leading-6 text-dark transition-300" />
            </button>
            <VField name="otp" rules="required" v-model="form.otp">
              <FormOtp v-model="form.otp" :fields="4" class="my-5" />
            </VField>
            <FormTimer :key="timer" :timer :seconds-val="120" @timeout="timeout" @resend="sendCode" />
          </div>
        </Transition>
        <UIButton type="submit" class="w-full mt-5 !border-none" :text="step === 1 ? 'Davom etish' : 'Kirish'" :disabled="step === 1 && errors.email" :loading />
      </div>
    </VForm>
  </UIModal>
</template>
