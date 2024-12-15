<template>
  <div>
    <div class="bg-background py-6 sm:py-8">
      <div class="flex-between container items-center gap-4 max-sm:flex-col max-sm:items-start">
        <h1 class="text-xl font-bold sm:text-2xl md:text-3xl">Tashkilotlar</h1>
        <div class="flex flex-1 items-center justify-end gap-2 max-sm:w-full">
          <div class="group relative flex w-full items-center justify-center sm:max-w-[220px]">
            <UiInput type="text" placeholder="Qidirish" class="cursor-pointer pl-8 pr-8 leading-5" v-model="search" />
            <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
              <Icon name="i-lucide:search" class="transition-300 size-5 text-muted-foreground" />
            </span>
            <span class="absolute inset-y-0 end-0 flex cursor-pointer items-center justify-center px-2" @click="search = ''">
              <Icon name="i-lucide:x" class="transition-300 size-5 text-muted-foreground hover:text-destructive" :class="search ? 'opacity-100' : 'opacity-0'" />
            </span>
          </div>
          <UiButton variant="secondary" @click="open = true">
            <Icon name="i-lucide:filter" class="size-5 text-muted-foreground" />
          </UiButton>
        </div>
      </div>
    </div>
    <section class="container my-5">
      <div>
        <h3 class="leading-130 text-lg font-medium">Barcha natijalar</h3>
        <p class="leading-130 text-sm font-normal text-muted-foreground">Natijalar {{ organizations?.data?.length }}</p>
      </div>

      <div class="mt-5">
        <CardOrganization :data="organizations" />
      </div>
    </section>

    <UiDialog v-model:open="open">
      <UiDialogContent class="sm:max-w-md" title="Filter">
        <template #content>
          <div class="flex flex-col gap-4">
            <!-- <UiRating v-model="rating" /> -->

            <UiSelect v-model="sector">
              <UiSelectTrigger placeholder="Sektorni tanlang" />
              <UiSelectContent>
                <UiSelectGroup>
                  <UiSelectItem v-for="(fruit, key) in fruits" :key :value="fruit" :text="fruit" />
                </UiSelectGroup>
              </UiSelectContent>
            </UiSelect>

            <UiSelect v-model="section" :disabled="!sector">
              <UiSelectTrigger placeholder="Bo'limni tanlang" />
              <UiSelectContent>
                <UiSelectGroup>
                  <UiSelectItem v-for="(fruit, key) in fruits" :key :value="fruit" :text="fruit" />
                </UiSelectGroup>
              </UiSelectContent>
            </UiSelect>
          </div>
        </template>

        <template #footer>
          <UiDialogFooter class="gap-2 sm:justify-end">
            <UiDialogClose as-child>
              <UiButton variant="secondary">Close</UiButton>
            </UiDialogClose>
            <UiButton>Filter</UiButton>
          </UiDialogFooter>
        </template>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>

<script setup>
  import { useOrganizationsStore } from "@/stores/organizations.js";

  const organizationsStore = useOrganizationsStore();

  const { getOrganizations } = organizationsStore;

  const search = ref("");
  const open = ref(false);
  const sector = ref("");
  const section = ref("");

  const { data: organizations } = await useAsyncData("organizations", async () => {
    return await getOrganizations({
      "filter[sector]": sector.value,
      "filter[section]": section.value,
    });
  });
</script>
