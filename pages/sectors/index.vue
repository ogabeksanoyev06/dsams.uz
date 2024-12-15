<template>
  <div>
    <div class="bg-background py-6 sm:py-8">
      <div class="flex-between container items-center gap-4 max-sm:flex-col max-sm:items-start">
        <div class="shrink-0">
          <h1 class="text-xl font-bold sm:text-2xl md:text-3xl">Sektorlar</h1>
        </div>
        <div class="group relative flex w-full max-w-[400px] items-center justify-center">
          <UiInput type="text" placeholder="Sektor qidirish" class="cursor-pointer pl-10 pr-10" v-model="search" />
          <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
            <Icon name="i-lucide:search" class="transition-300 size-5 text-muted-foreground group-hover:text-accent-foreground" />
          </span>
          <span class="absolute inset-y-0 end-0 flex cursor-pointer items-center justify-center px-2" @click="search = ''">
            <Icon name="i-lucide:x" class="transition-300 size-5 text-muted-foreground hover:text-destructive" :class="search ? 'opacity-100' : 'opacity-0'" />
          </span>
        </div>
      </div>
    </div>
    <div class="py-8">
      <div class="container">
        <div class="column-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          <div class="break-inside-avoid" v-for="(sector, key) in sectors.data" :key>
            <div class="transition-300 group flex h-max flex-col items-start justify-start gap-3 overflow-hidden rounded-xl max-sm:my-4 md:gap-4 md:border-b md:border-border md:bg-background md:pt-4">
              <div class="mx-4 flex w-11/12 cursor-pointer items-center justify-center gap-2 max-sm:mx-0 max-sm:w-full max-sm:justify-start md:flex-col md:items-start">
                <NuxtLink :to="localePath(`/sectors/${sector?._id}`)" class="flex-center-between group/title gap-1.5 hover:!text-primary max-sm:justify-start">
                  <span class="transition-300 cursor-pointer self-stretch text-sm font-medium leading-6 group-hover/title:text-primary">{{ sector.name }}</span>
                  <Icon name="i-lucide:chevron-right" class="transition-300 size-5 -translate-x-1 text-muted-foreground opacity-0 group-hover/title:translate-x-0 group-hover/title:text-primary group-hover/title:opacity-100 max-sm:hidden" />
                </NuxtLink>
              </div>

              <div class="flex w-full flex-col items-start justify-start max-md:rounded-2xl max-md:bg-background max-md:pl-4 max-sm:pl-0">
                <div v-for="(section, i) in sector.sections" :key="i" class="group/link transition-300 w-full cursor-pointer pl-4 hover:bg-primary/5">
                  <div class="flex w-full items-center gap-1.5">
                    <span class="font-medium text-muted-foreground">{{ i + 1 }}. </span>
                    <div class="flex-center-between w-full gap-2 border-b border-primary/10 py-2 pr-2">
                      <span class="leading-130 transition-300 line-clamp-2 w-full text-sm font-normal group-hover/link:text-primary">{{ section.name }}</span>
                      <Icon name="i-lucide:chevron-right" class="transition-300 size-5 opacity-0 group-hover/link:text-primary group-hover/link:opacity-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useSektorStore } from "@/stores/sektors.js";

  const sektorStore = useSektorStore();

  const { getSektors, getSearchSektors } = sektorStore;
  const { loading } = storeToRefs(sektorStore);

  const localePath = useLocalePath();
  const { locale } = useI18n();

  const isSearchOpen = ref(false);
  const route = useRoute();
  const search = ref(route.query.q || "");
  const searchList = ref([]);
  const { updateQuery } = useQueryChange();

  const searchFn = async (search) => {
    const res = await getSearchSektors({ lang: locale.value, text: search });
    searchList.value = res;
  };

  watch(
    () => search.value,
    (search) => {
      if (search?.trim().length > 0) {
        isSearchOpen.value = true;
        debounce("search", () => {
          searchFn(String(search));
          updateQuery("q", String(search));
        });
      }
    }
  );

  const { data: sectors } = await useAsyncData("sectors", async () => {
    return await getSektors({ lang: locale.value, limit: 20, page: 1 });
  });
</script>
