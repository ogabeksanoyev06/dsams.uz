<template>
  <div class="grid gap-4">
    <div class="relative flex flex-col gap-2 overflow-hidden rounded-xl border border-border/50 p-2 sm:p-4" v-for="(item, i) in questionsWithAnswers" :class="{ 'shadow-sm shadow-orange-300': item.status }">
      <div class="mt-7 flex flex-col gap-2 sm:flex-row">
        <span class="flex-center h-7 w-7 flex-shrink-0 rounded-full bg-primary leading-normal text-xs font-semibold text-white">{{ i + 1 }}</span>
        <div class="question text-sm leading-6" v-html="item.description_uz" />
      </div>
      <a :href="item.answer_url" target="_blank" class="mt-2 text-sm">Fayl: <span class="font-semibold text-blue-500">Ko'rish</span></a>
      <div class="mt-5 flex gap-2 sm:justify-end">
        <UiButton variant="outline" class="max-sm:w-full" @click="openDialog(item)" :disabled="!item.answer_url">Ball qo'yish</UiButton>
      </div>
      <div v-if="item.status" class="flex-center absolute right-5 top-0 h-6 w-7 rounded-b-xl bg-primary text-xs font-semibold text-white">{{ item.ball }}</div>
      <div v-if="!item.answer_url" class="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
        <span class="rounded-sm bg-primary px-2 py-1 text-sm"> Fayl mavjud emas</span>
      </div>
    </div>
    <UiDialog v-model:open="dialog">
      <UiDialogContent class="sm:max-w-[425px]" title="Ball qo'yish" description="Sizda urunishlar soni faqat 1 ta. Iltimos e'tiborli bo'ling.">
        <template #content>
          <div class="grid gap-4">
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
  import { useProfileStore } from "@/stores/profile.js";

  definePageMeta({
    layout: "profile",
  });

  const { showToast } = useCustomToast();
  const route = useRoute();

  const applicationStore = useApplicationStore();
  const profileStore = useProfileStore();

  const { getApplicationById, rateApplication } = applicationStore;
  const { questionsWithAnswers } = storeToRefs(applicationStore);
  const { user } = storeToRefs(profileStore);

  const { locale } = useI18n();

  const loading = ref(false);
  const scores = [0, 1, 2, 3, 4, 5];
  const selectedScore = ref(scores[0]);
  const dialog = ref(false);
  const answerId = ref(null);

  const selectedQuestion = ref(null);

  const openDialog = (item) => {
    answerId.value = item.answer_id;
    dialog.value = true;
    selectedQuestion.value = item;
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
        selectedQuestion.value.status = true;
        selectedQuestion.value.ball = selectedScore.value;
        dialog.value = false;
        selectedScore.value = scores[0];
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

    const mainUser = response.data?.experts?.main || {};
    const secondaryUsers = response.data?.experts?.secondary || [];
    const currentUserEmail = user.value?.data?.email;

    let ratings = [];

    if (mainUser.id?.email === currentUserEmail) {
      ratings = mainUser.rating || [];
    } else {
      const foundUser = secondaryUsers.find((u) => u.id?.email === currentUserEmail);
      if (foundUser) {
        ratings = foundUser.rating || [];
      }
    }

    questionsWithAnswers.value = questions.map((question) => {
      const answer = answers?.find((ans) => ans.question_id === question._id);
      const rating = ratings?.find((rate) => rate.answer_id === answer?._id);

      return {
        ...question,
        status: rating ? rating.status : answer ? answer.status : false,
        ball: rating ? rating.ball : answer ? answer.ball : 0,
        answer_id: answer ? answer._id : null,
        answer_url: answer ? answer.answer_url : null,
      };
    });

    return response;
  });
</script>
