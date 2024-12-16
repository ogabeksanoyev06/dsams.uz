<template>
  <div class="grid gap-4">
    <div class="flex flex-col gap-2 rounded-xl p-4 shadow-md" v-for="item in questionsWithAnswers">
      <div class="question" v-html="item.description_uz" />
      <a :href="item.answer_url" target="_blank">{{ item.answer_url ? "Yuklangan fayl" : "Fayl mavjud emas" }}</a>
      <UiButton variant="outline" @click="openDialog(item.answer_id)">Ball qo'yish</UiButton>
    </div>
    <UiDialog v-model:open="dialog">
      <UiDialogContent class="sm:max-w-[425px]">
        <template #content>
          <div class="grid gap-4 py-4">
            <div class="grid gap-2">
              <UiLabel for="name" class="text-right"> Tanlang </UiLabel>
              <UiSelect v-model="selectedScore">
                <UiSelectTrigger placeholder="Select an option" />
                <UiSelectContent>
                  <UiSelectGroup>
                    <UiSelectItem v-for="score in scores" :key="score" :value="score">
                      {{ score }}
                    </UiSelectItem>
                  </UiSelectGroup>
                </UiSelectContent>
              </UiSelect>
            </div>
          </div>
        </template>
        <template #footer>
          <UiDialogFooter>
            <UiButton @click="handleSubmit" :loading="loading">Tasdiqlash</UiButton>
          </UiDialogFooter>
        </template>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>

<script setup>
  import { useCustomToast } from "@/composables/useCustomToast.js";
  import { useApplicationStore } from "@/stores/application.js";

  definePageMeta({
    layout: "profile",
  });

  const { showToast } = useCustomToast();
  const route = useRoute();

  const applicationStore = useApplicationStore();

  const { getApplicationById, rateApplication } = applicationStore;
  const { questionsWithAnswers } = storeToRefs(applicationStore);

  const localePath = useLocalePath();
  const { locale } = useI18n();

  const loading = ref(false);
  const scores = [0, 1, 2, 3, 4, 5];
  const selectedScore = ref(scores[0]);
  const dialog = ref(false);
  const answerId = ref(null);

  const openDialog = (id) => {
    answerId.value = id;
    dialog.value = true;
  };

  const handleSubmit = async () => {
    try {
      loading.value = true;
      const res = await rateApplication(route.params.id, {
        ball: selectedScore.value,
        answer_id: answerId.value,
      });
      if (res.status) {
        showToast(res.message, "success");
      }
    } catch (error) {
      showToast(error.response?.data?.message, "error");
    } finally {
      loading.value = false;
    }
  };

  const { data } = await useAsyncData("assessments-id", async () => {
    const response = await getApplicationById(route.params.id, { lang: locale.value });

    const questions = response.data.standart?.questions || [];
    const answers = response.data?.answers || [];

    questionsWithAnswers.value = questions.map((question) => {
      const answer = answers.find((ans) => ans.question_id === question._id);
      return {
        ...question,
        answer_id: answer ? answer._id : null,
        answer_url: answer ? answer.answer_url : null,
      };
    });
    return response;
  });
</script>
