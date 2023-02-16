<script lang="ts" setup>
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useConfig } from '@/config'
import anime from 'animejs/lib/anime.es.js'

const { asideMenu } = useConfig()

const $message =
  getCurrentInstance()?.appContext.config.globalProperties.$message

const router = useRouter()

const confirmModalVisible = ref<boolean>(false)

async function onLogOut() {
  await $message?.success('退出成功')
  confirmModalVisible.value = false
  setTimeout(() => {
    router.replace('/login')
  }, 1500)
}

onMounted(() => {
  anime({
    targets: '.animation-aside-menu-item',
    translateX: [-30, 0],
    delay: function (el: HTMLElement, i: number, l: any) {
      return i * 100
    },
    endDelay: function (el: HTMLElement, i: number, l: any) {
      return (l - i) * 100
    }
  })
})
</script>

<template>
  <aside v-bind="$attrs" class="min-w20 flex flex-col py7 bg-black">
    <!-- logo -->
    <div class="inline-block mxauto b-rd-full overflow-hidden">
      <img
        src="~@/assets/images/logo.png"
        alt="avatar"
        width="45"
        height="45"
      />
    </div>
    <!-- sidebar menu -->
    <aside-menus class="flex-auto">
      <aside-menu-item
        :icon="menu.icon"
        :path="menu.path"
        :key="menu.path"
        class="animation-aside-menu-item"
        v-for="menu in asideMenu"
        >{{ menu.name }}</aside-menu-item
      >
    </aside-menus>
    <!-- logout menu -->
    <aside-menu-item
      :icon="faSignOut"
      @click="
        $modal.confirm({
          text: '确定要退出吗'
        })
      "
      >退出登录</aside-menu-item
    >
    <!-- <modal title="确认框" v-model:visible="confirmModalVisible">
      <div class="text-sm">确定要退出登录吗?</div>
      <div class="flex justify-end space-x-2">
        <v-button type="primary" @click="onLogOut">确定</v-button>
        <v-button type="info" @click="confirmModalVisible = false"
          >取消</v-button
        >
      </div>
    </modal> -->
  </aside>
</template>
