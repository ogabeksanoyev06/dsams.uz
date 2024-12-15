<template>
  <textarea v-bind="props" v-model="localModel" :class="[styles({ class: props.class }), { '!border-destructive !bg-destructive/10': props.error }]" />
</template>

<script lang="ts" setup>
  const props = defineProps<{
    class?: any;
    name?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    rows?: number;
    modelValue?: string;
    error?: boolean;
  }>();

  const emits = defineEmits<{
    "update:modelValue": [value: any];
  }>();

  const localModel = useVModel(props, "modelValue", emits);

  const styles = tv({
    base: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
  });
</script>
