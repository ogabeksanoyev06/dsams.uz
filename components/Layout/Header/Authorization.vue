<script setup>
const localePath = useLocalePath()
const router = useRouter()

const menuItems = [
  {
    label: "Mening ma'lumotlarim",
    icon: 'icon-notification',
    route: '/my-profile',
    hoverColor: 'text-yellow',
  },
  {
    label: 'Xabarnomalar',
    icon: 'icon-notification',
    route: '/my-profile/notifications',
    hoverColor: 'text-yellow',
  },
  {
    label: 'Saqlanganlar',
    icon: 'icon-archive-add',
    route: '/my-profile/saved',
    hoverColor: 'text-yellow',
  },
  {
    label: 'Tashkilotni baholash',
    icon: 'icon-archive-add',
    route: '/my-profile/saved',
    hoverColor: 'text-yellow',
  },
]

const authModal = ref(false)

const showDropdown = ref(false)

function handleDropdownToggle(val) {
  showDropdown.value = val
}

function handleClick(item) {
  router.push(item.route)
  showDropdown.value = false
}
</script>

<template>
  <UIButton :text="false ? 'profile' : 'Kirish'" wrapperClass="!py-[7px] px-0 max-w-[150px] w-full !rounded-lg shadow-yellow-1 border-[1.5px] border-white/[0.12]" @click="user?.id ? $router.push(localePath('/profile')) : (authModal = true)" />

  <UIDropdown :show="showDropdown" :head-class="['flex items-center gap-2 text-dark cursor-pointer py-2 transition-colors duration-300']" body-class="!min-w-[250px]" @toggle="handleDropdownToggle">
    <template #head>
      <div class="w-9 h-9 rounded-full linear-border-image cursor-pointer">
        <img src="https://web.xolodilnikgo.uz/web/image/res.partner/4351/image_1024/" alt="user" class="w-full h-full object-cover object-center rounded-full" />
      </div>
      <span class="icon-angle-right transition-transforms duration-300 text-gray-4 text-base" :class="showDropdown ? 'rotate-[270deg]' : 'rotate-90'"></span>
    </template>
    <template #body>
      <div>
        <div class="flex items-center gap-2 py-2 px-3 cursor-pointer transition-300 hover:bg-gray-1 group relative" v-for="(item, index) in menuItems" :key="index" @click="handleClick(item)">
          <span class="icon-notification text-lg text-gray-5 group-hover:text-yellow transition-300" :class="item.icon"></span>
          <div class="flex-center-between w-full">
            <span class="text-sm font-normal text-dark flex-y-center gap-1">{{ item.label }} </span>
            <i class="icon-angle-right block text-gray-3"></i>
          </div>
          <hr class="absolute bottom-0 bg-gray-1 h-px w-full border-none" />
        </div>

        <div class="flex items-center gap-2 py-2 px-3 cursor-pointer transition-300 hover:bg-gray-1 group relative">
          <span class="icon-notification !text-[#EC7F80] group-hover:!text-red-600 text-lg text-gray-5transition-300"></span>
          <div class="flex-center-between w-full">
            <span class="text-sm font-normal text-dark flex-y-center gap-1"> Akkauntdan chiqish </span>
          </div>
        </div>
      </div>
    </template>
  </UIDropdown>

  <ModalAuth v-model="authModal" />
</template>
