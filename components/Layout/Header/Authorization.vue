<template>
  <div>
    <UiButton v-if="!accessToken" variant="secondary" size="sm" class="max-sm:w-9 max-sm:px-0" @click="authModal = true">
      <Icon class="h-[18px] w-[18px]" name="i-ph:sign-in" />
      <span class="max-lg:hidden">Tizimga kirish</span>
    </UiButton>
    <UiDropdownMenu v-if="accessToken">
      <UiDropdownMenuTrigger asChild>
        <div>
          <!-- <Icon class="h-[18px] w-[18px]" name="lucide:user-circle" /> -->
          <div class="linear-border-image h-9 w-9 cursor-pointer rounded-full">
            <img src="/assets/images/placeholder.png" alt="user" class="h-full w-full rounded-full object-cover object-center" />
          </div>
        </div>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent class="w-64 px-2 py-1.5 font-medium" align="end">
        <div class="text-sm font-semibold">
          <div class="relative mb-2 flex flex-col items-center justify-center gap-y-3 rounded-md bg-muted px-2 py-4">
            <div class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-muted">
              <img src="/assets/images/placeholder.png" alt="" />
            </div>
            <div class="flex flex-col items-center justify-center" v-if="user">
              <span class="text-sm font-medium"> {{ user?.data?.name && user?.data?.surname ? user.data.name + " " + user.data.surname : "" }}</span>
              <span class="text-xs text-muted-foreground">{{ user?.data?.email }}</span>
            </div>
          </div>
        </div>
        <NuxtLink :to="localePath('/profile')">
          <UiDropdownMenuItem class="cursor-pointer">
            <Icon class="h-[18px] w-[18px]" name="lucide:user" />
            <span>Profil</span>
          </UiDropdownMenuItem>
        </NuxtLink>

        <UiDropdownMenuSeparator class="mx-1.5 bg-muted" />
        <UiDropdownMenuItem class="cursor-pointer hover:!text-destructive" @click="logout">
          <Icon class="h-[18px] w-[18px]" name="lucide:log-out" />
          <span>Chiqish</span>
        </UiDropdownMenuItem>
      </UiDropdownMenuContent>
    </UiDropdownMenu>

    <ModalAuth v-model="authModal" />
  </div>
</template>

<script setup>
  import { useAuthStore } from "@/stores/auth.js";
  import { useProfileStore } from "@/stores/profile.js";

  const authModal = useState("authModal", () => false);

  const localePath = useLocalePath();

  const profileStore = useProfileStore();
  const authStore = useAuthStore();

  const accessToken = useCookie("user_token");

  const { showToast } = useCustomToast();
  const router = useRouter();

  const { user } = storeToRefs(profileStore);
  const { logout } = authStore;
</script>

<style>
  .linear-border-image {
    background:
      radial-gradient(circle at 100% 100%, #fff 0, #fff 17px, transparent 0) 0 0 / 19px 19px no-repeat,
      radial-gradient(circle at 0 100%, #fff 0, #fff 17px, transparent 0) 100% 0 / 19px 19px no-repeat,
      radial-gradient(circle at 100% 0, #fff 0, #fff 17px, transparent 0) 0 100% / 19px 19px no-repeat,
      radial-gradient(circle at 0 0, #fff 0, #fff 17px, transparent 0) 100% 100% / 19px 19px no-repeat,
      linear-gradient(#fff, #fff) 50% 50% / calc(100% - 4px) calc(100% - 38px) no-repeat,
      linear-gradient(#fff, #fff) 50% 50% / calc(100% - 38px) calc(100% - 4px) no-repeat,
      linear-gradient(hsl(var(--primary)), hsl(var(--primary)));
    border-radius: 19px;
    box-sizing: border-box;
    padding: 2px;
  }
</style>
