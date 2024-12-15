<template>
  <SelectTrigger class="" :class="[styles({ class: props.class }), { '!border-destructive !bg-destructive/5': props.error }]" v-bind="forwarded">
    <slot>
      <UiSelectValue :placeholder="placeholder" class="line-clamp-1" />
    </slot>
    <UiSelectIcon :icon="icon" />
  </SelectTrigger>
</template>

<script lang="ts" setup>
  import { SelectTrigger } from "radix-vue";
  import type { SelectTriggerProps } from "radix-vue";

  const props = defineProps<
    SelectTriggerProps & {
      /** Custom class(es) to add to the parent */
      class?: any;
      /** Icon to render */
      icon?: string;
      /** Placeholder text */
      placeholder?: string;

      error?: boolean;
    }
  >();
  const forwarded = reactiveOmit(props, "class", "icon", "placeholder", "error");
  const styles = tv({
    base: "line-clamp-1 flex h-10 w-full text-start items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:!border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground",
  });
</script>
