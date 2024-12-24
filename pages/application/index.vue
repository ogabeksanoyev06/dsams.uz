<template>
  <div class="container py-4 pb-8">
    <h1 class="mb-6 text-xl font-bold sm:text-2xl md:text-3xl">Ariza qoldirish</h1>
    <div class="relative rounded-b-xl bg-background p-4">
      <div class="absolute left-0 top-0 h-2 w-full bg-muted"></div>
      <div class="absolute left-0 top-0 h-2 bg-primary transition-all duration-300" :style="{ width: progressWidth }"></div>
      <Transition name="fade" mode="out-in">
        <template v-if="currentStep === 1">
          <div>
            <h3 class="mb-4 text-lg font-semibold">Ma‘lumotlar</h3>
            <div class="mb-6 grid gap-4 md:grid-cols-12">
              <div class="grid gap-1.5 md:col-span-12">
                <UiLabel for="company-name">Tashkilot nomi</UiLabel>
                <UiInput id="company-name" v-model="values.company.name" placeholder="Tashkilot nomi" :error="$v.company.name?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-12">
                <UiLabel for="company-yur-address">Yuridik manzil</UiLabel>
                <UiInput id="company-yur-address" v-model="values.company.yur_address" placeholder="Yuridik manzil" :error="$v.company.yur_address?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-12">
                <UiLabel for="company-real-address">Haqiqiy manzil</UiLabel>
                <UiInput id="company-real-address" v-model="values.company.real_address" placeholder="Haqiqiy manzil" :error="$v.company.real_address?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-phone-number">Telefon raqami</UiLabel>
                <div class="relative w-full">
                  <UiInput id="company-phone-number" v-model="values.company.phone_number" class="pl-14" placeholder="Telefon raqami" :error="$v.company.phone_number?.$error" />
                  <span class="absolute inset-y-0 start-0 flex h-10 items-center py-2 pl-3 text-sm leading-10">
                    <span>+998</span>
                  </span>
                </div>
              </div>

              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-inn">INN</UiLabel>
                <UiInput id="company-inn" v-model="values.company.inn" placeholder="INN" :error="$v.company.inn?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-email">Email</UiLabel>
                <UiInput id="company-email" type="email" v-model="values.company.email" placeholder="Email" :error="$v.company.email?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-website">Vebsayt</UiLabel>
                <UiInput id="company-website" v-model="values.company.website" placeholder="Vebsayt" :error="$v.company.website?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-mfo">MFO</UiLabel>
                <UiInput id="company-mfo" v-model="values.company.mfo" placeholder="MFO" :error="$v.company.mfo?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-12">
                <UiLabel for="company-bank-account">Bank raqami</UiLabel>
                <UiTextarea id="company-bank-account" type="text" v-model="values.company.bank_account" placeholder="Bank raqami" :error="$v.company.bank_account?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-12">
                <UiLabel for="company-director">Tashkilot direktori F.I.Sh</UiLabel>
                <UiInput id="company-director" v-model="values.company.director" placeholder="Tashkilot direktori F.I.Sh" :error="$v.company.director?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-12">
                <UiLabel for="company-second-director">Biriktirilgan vakil F.I.SH va lavozimi</UiLabel>
                <UiInput id="company-second-director" v-model="values.company.second_director" placeholder="Biriktirilgan vakil F.I.SH va lavozimi" :error="$v.company.second_director?.$error" />
              </div>
            </div>
            <h3 class="mb-4 text-lg font-semibold">Tashkilotning tuzilishi va faoliyati xodimlarining soni</h3>

            <div class="mb-6 grid gap-4 md:grid-cols-12">
              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-workers">Xodimlarning umumiy soni</UiLabel>
                <UiInput id="company-workers" type="number" min="0" v-model="values.company.workers" placeholder="Xodimlarning umumiy soni" :error="$v.company.workers?.$error" />
              </div>
              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-t_workers">Vaqtinchalik ishchilar soni</UiLabel>
                <UiInput id="company-t_workers" type="number" min="0" v-model="values.company.t_workers" placeholder="Vaqtinchalik ishchilar soni" :error="$v.company.t_workers?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-employees-s_workers">Smenada ishlaydigan xodimlar soni</UiLabel>
                <UiInput id="company-employees-s_workers" type="number" min="0" v-model="values.company.s_workers" placeholder="Smenada ishlaydigan xodimlar soni" :error="$v.company.s_workers?.$error" />
              </div>

              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-work-time">Standart ish vaqti (soat)</UiLabel>
                <UiInput id="company-work-time" type="number" min="1" v-model="values.company.work_time" placeholder="Standart ish vaqti (soat)" :error="$v.company.work_time?.$error" />
              </div>
            </div>
            <h3 class="mb-4 text-lg font-semibold sm:max-w-[80%]">Tashkilotning tekshirishga tayyor bo'lish muddati. Dastlabki baholashni o'tkazish uchun taklif qilingan muddat (agar kerak bo'lsa)</h3>
            <div class="mb-6 grid gap-4 md:grid-cols-12">
              <div class="grid gap-1.5 md:col-span-6">
                <UiLabel for="company-date">Baholashni o'tkazish uchun taklif qilingan muddat</UiLabel>
                <UiDatepicker v-model="values.company.term" :error="$v.company.term?.$error">
                  <template #default="{ togglePopover }">
                    <UiButton variant="outline" :class="[!range && 'text-muted-foreground', 'w-full items-center justify-between text-left', { '!border-destructive': $v.company.term?.$error }]" @click="togglePopover">
                      {{ values.company.term ? $dayjs(values.company.term).format("DD.MM.YYYY HH:mm") : "Tanlang" }}
                      <Icon name="lucide:calendar" class="h-4 w-4" />
                    </UiButton>
                  </template>
                </UiDatepicker>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="currentStep === 2">
          <div>
            <h3 class="mb-4 text-lg font-semibold">O'zingizga mos keladigan bo'limlarni tanlang</h3>
            <div class="mb-6 grid gap-4 md:grid-cols-12">
              <div class="grid gap-1.5 md:col-span-4">
                <UiLabel for="company-services">Sektorlar</UiLabel>
                <UiSelect v-model="values.sektor" @update:model-value="selectedSektor">
                  <UiSelectTrigger placeholder="Tanlang" :error="$v.sektor?.$error" />
                  <UiSelectContent>
                    <UiSelectGroup>
                      <UiSelectItem v-for="sector in data.sectors.data" :key="sector._id" :value="sector._id" :text="sector.name" />
                    </UiSelectGroup>
                  </UiSelectContent>
                </UiSelect>
              </div>

              <div class="grid gap-1.5 md:col-span-4">
                <UiLabel for="sections">Bo'limlar</UiLabel>
                <UiSelect v-model="values.sections" :disabled="!values.sektor || loadingSection">
                  <UiSelectTrigger :error="$v.sections?.$error">
                    <Icon v-if="loadingSection" name="lucide:loader" class="h-4 w-4 shrink-0 animate-spin text-muted-foreground opacity-70" />
                  </UiSelectTrigger>
                  <UiSelectContent>
                    <UiSelectGroup>
                      <UiSelectItem v-for="section in sections" :key="section._id" :value="section._id" :text="section.name" />
                    </UiSelectGroup>
                  </UiSelectContent>
                </UiSelect>
              </div>
              <div class="grid gap-1.5 md:col-span-4">
                <UiLabel for="company-services">Standardlar</UiLabel>
                <UiSelect v-model="values.standart" :disabled="!values.sections || loadingStandardById" @update:model-value="selectedStandard">
                  <UiSelectTrigger placeholder="Tanlang" :error="$v.standart?.$error" />
                  <UiSelectContent>
                    <UiSelectGroup>
                      <UiSelectItem v-for="item in data.standards?.data" :key="item._id" :value="item._id" :text="item?.name" />
                    </UiSelectGroup>
                  </UiSelectContent>
                </UiSelect>
              </div>
              <div class="md:col-span-12">
                <h3 class="mb-4 text-lg font-semibold">Savollar: {{ standard?.name }}</h3>
                <ul class="grid gap-4">
                  <li class="border-b border-dashed pb-4" v-for="(question, key) in standard?.questions" :key="key">
                    <h3 class="text-base font-semibold">{{ key + 1 }}. {{ question?.title }}</h3>
                    <div class="mb-2 text-sm" v-html="question?.description" />
                    <div class="mt-2 flex sm:justify-end">
                      <div class="grid gap-1.5">
                        <UiLabel :for="`file-${question?._id}`">Fayl <span>Max: 10mb</span> </UiLabel>
                        <UiFileInput :id="`file-${question?._id}`" :questionId="question?._id" @error="handleError($event, question?._id)" :error="isMaxSize && question?._id === currentQuestionId" @update:modelValue="handleUploader" dashed />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div>
            <h3 class="mb-4 text-lg font-semibold">Eksportlarni tanlang</h3>
            <UiTabs v-model="currentTab" @update:modelValue="changeTab" class="mb-6">
              <UiTabsList :pill="false" class="relative mb-6 grid max-w-[400px] grid-cols-2">
                <UiTabsTrigger :pill="false" :value="tab.value" v-for="(tab, key) in tabList" :key>{{ tab.name }}</UiTabsTrigger>
                <UiTabsIndicator />
              </UiTabsList>
              <div v-show="currentTab === tab.value" :value="tab.value" v-for="(tab, key) in tabList" :key>
                <div class="w-full overflow-x-auto rounded-md border">
                  <UiTable>
                    <UiTableHeader>
                      <UiTableRow>
                        <UiTableHead>#</UiTableHead>
                        <UiTableHead>Email</UiTableHead>
                        <UiTableHead>F.I.SH</UiTableHead>
                        <UiTableHead>Telefon raqam</UiTableHead>
                        <UiTableHead>Lavozim</UiTableHead>
                        <UiTableHead>Tug'ilgan kun</UiTableHead>
                      </UiTableRow>
                    </UiTableHeader>
                    <UiTableBody class="last:border-b-0">
                      <UiTableRow v-for="(exp, key) in data.exports?.data" :key>
                        <UiTableCell>
                          <UiCheckbox :checked="isChecked(exp._id)" @update:checked="updateExportList(exp._id, $event)" />
                        </UiTableCell>
                        <UiTableCell> {{ exp.email }} </UiTableCell>
                        <UiTableCell> {{ exp.surname }} {{ exp.name }} {{ exp.father_name }} </UiTableCell>
                        <UiTableCell>
                          <a :href="`tel:${exp.phone_number}`">
                            {{ exp.phone_number }}
                          </a>
                        </UiTableCell>
                        <UiTableCell> {{ exp.position }}</UiTableCell>
                        <UiTableCell>
                          {{ exp.birth_date }}
                        </UiTableCell>
                      </UiTableRow>
                    </UiTableBody>
                  </UiTable>
                </div>
              </div>
            </UiTabs>
          </div>
        </template>
      </Transition>
      <div class="flex items-center justify-end gap-2">
        <UiButton variant="outline" v-if="currentStep > 1" @click="currentStep--">Orqaga</UiButton>
        <UiButton @click="handleSubmitForm" :loading="loading">{{ currentStep === 3 ? "Arizani yuborish" : "Keyingi" }}</UiButton>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useCustomToast } from "@/composables/useCustomToast.js";
  import { useApplicationStore } from "@/stores/application.js";
  import { useSektorStore } from "@/stores/sektors.js";
  import { useStandardsStore } from "@/stores/standards.js";
  import { useTranslate } from "~/utils/i18n-validators";
  import { useI18n } from "vue-i18n";

  definePageMeta({
    middleware: ["auth"],
  });

  const localePath = useLocalePath();

  const { showToast } = useCustomToast();
  const { locale } = useI18n();

  const applicationStore = useApplicationStore();
  const sektorStore = useSektorStore();
  const standardStore = useStandardsStore();

  const { createApplication, getAllExports } = applicationStore;
  const { getSektors, getSektorById } = sektorStore;
  const { getStandards, getStandardById } = standardStore;

  const { loading } = storeToRefs(applicationStore);
  const { sections, loadingSection } = storeToRefs(sektorStore);
  const { loadingStandardById } = storeToRefs(standardStore);

  const { requiredIf, validPhoneNumber, isNumber, email } = useTranslate();

  const tabList = [
    {
      name: "Bosh exportlar",
      value: "main",
    },
    {
      name: "Exportlar",
      value: "secondary",
    },
  ];
  const currentTab = ref(tabList[0].value);

  const changeTab = (value) => {
    currentTab.value = value;
  };

  const standard = ref({});

  const currentStep = ref(1);
  const totalSteps = 3;

  const isMaxSize = ref(false);
  const currentQuestionId = ref(null);

  const { values, $v } = useForm(
    {
      company: {
        name: "",
        yur_address: "",
        real_address: "",
        phone_number: "",
        inn: "",
        email: "",
        website: "",
        mfo: "",
        bank_account: "",
        director: "",
        second_director: "",
        workers: null,
        t_workers: null,
        s_workers: null,
        work_time: "",
        term: null,
      },
      experts: {
        main: {
          id: 1,
        },
        secondary: [
          {
            id: 1,
          },
        ],
      },
      sektor: "",
      standart: "",
      sections: "",
      answers: [],
    },
    {
      company: {
        name: { required: requiredIf(() => currentStep.value === 1) },
        yur_address: { required: requiredIf(() => currentStep.value === 1) },
        real_address: { required: requiredIf(() => currentStep.value === 1) },
        phone_number: { required: requiredIf(() => currentStep.value === 1), validPhoneNumber },
        inn: { required: requiredIf(() => currentStep.value === 1) },
        email: { required: requiredIf(() => currentStep.value === 1), email },
        website: { required: requiredIf(() => currentStep.value === 1) },
        mfo: { required: requiredIf(() => currentStep.value === 1), isNumber },
        bank_account: { required: requiredIf(() => currentStep.value === 1), isNumber },
        director: { required: requiredIf(() => currentStep.value === 1) },
        second_director: { required: requiredIf(() => currentStep.value === 1) },
        workers: { required: requiredIf(() => currentStep.value === 1) },
        t_workers: { required: requiredIf(() => currentStep.value === 1) },
        s_workers: { required: requiredIf(() => currentStep.value === 1) },
        work_time: { required: requiredIf(() => currentStep.value === 1) },
        term: { required: requiredIf(() => currentStep.value === 1) },
      },
      experts: {
        main: { required: requiredIf(() => currentStep.value === 3) },
        secondary: { required: requiredIf(() => currentStep.value === 3) },
      },
      sektor: { required: requiredIf(() => currentStep.value === 2) },
      standart: { required: requiredIf(() => currentStep.value === 2) },
      sections: { required: requiredIf(() => currentStep.value === 2) },
      answers: { required: requiredIf(() => currentStep.value === 2) },
    }
  );
  const generalExportList = ref([]);
  const exportList = ref([]);

  const isChecked = (key) => {
    if (currentTab.value === "main") {
      return generalExportList.value.includes(key);
    } else {
      return exportList.value.includes(key);
    }
  };

  const updateGeneralExport = (key, checked) => {
    if (checked) {
      generalExportList.value = [key];
    } else {
      generalExportList.value = [];
    }
  };
  const updateExportList = (key, checked) => {
    if (currentTab.value == "main") {
      updateGeneralExport(key, checked);
    } else {
      if (checked) {
        if (!exportList.value.includes(key)) {
          exportList.value.push(key);
        }
      } else {
        exportList.value = exportList.value?.filter((item) => item !== key);
      }
    }
  };

  const handleUploader = (data) => {
    if (data.questionId) {
      const existingAnswer = values.answers?.find((answer) => answer?.question_id === data.questionId);
      if (existingAnswer) {
        existingAnswer.answer_url = data.file;
      } else {
        values.answers.push({
          question_id: data?.questionId,
          answer_url: "url",
        });
      }
    }
  };

  const handleError = (isError, questionId) => {
    const questionExists = standard.value.questions?.some((q) => q._id === questionId);
    if (questionExists) {
      currentQuestionId.value = questionId;
      isMaxSize.value = isError;
    }
  };
  const handleSubmitForm = async () => {
    $v.value.$touch();
    if ($v.value.$invalid) {
      console.log($v.value);
      return false;
    }
    if (currentStep.value === 3) {
      try {
        const res = await createApplication({
          experts: {
            main: {
              id: generalExportList.value[0],
            },
            secondary: exportList.value?.map((item) => ({ id: item })),
          },
          company: {
            name: values.company.name,
            yur_address: values.company.yur_address,
            real_address: values.company.real_address,
            phone_number: values.company.phone_number,
            inn: values.company.inn,
            email: values.company.email,
            website: values.company.website,
            mfo: values.company.mfo,
            bank_account: values.company.bank_account,
            director: values.company.director,
            second_director: values.company.second_director,
            workers: values.company.workers,
            t_workers: values.company.t_workers,
            s_workers: values.company.s_workers,
            work_time: values.company.work_time,
            date: values.company.term?.getTime(),
          },
          sektor: values.sektor,
          standart: values.standart,
          sections: [values.sections],
          answers: values.answers,
        });
        if (res.status) {
          showToast("Arizangiz muvaffaqiyatli yuborildi", "success");
          navigateTo(localePath("/profile/my-applications"));
        }
      } catch (error) {
        showToast(error.response?.data?.message || "Xatolik yuz berdi", "error");
        console.log(error);
      }
    } else {
      currentStep.value++;
    }
  };

  const progressWidth = computed(() => {
    return `${(currentStep.value / totalSteps) * 100}%`;
  });
  const selectedSektor = async () => {
    try {
      await getSektorById(values.sektor, { lang: locale.value });
    } catch (error) {
      console.log(error);
    }
  };

  const selectedStandard = async () => {
    try {
      const res = await getStandardById(values.standart, { lang: locale.value });
      const standardData = res.data;
      console.log(standardData);
      if (standardData.questions.length > 0) {
        standardData.questions = standardData.questions.map((question) => ({
          ...question,
          file: null,
        }));
      }

      standard.value = standardData;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = await useAsyncData("application", async () => {
    const [exports, sectors, standards] = await Promise.all([
      getAllExports(),
      getSektors({
        lang: locale.value,
        limit: 500,
        page: 1,
      }),
      getStandards({
        lang: locale.value,
      }),
    ]);
    return {
      exports,
      sectors,
      standards,
    };
  });
</script>
