<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQq, faWeixin, faWeibo } from '@fortawesome/free-brands-svg-icons'

type FormState = {
  username: string
  password: string
  rememberMe: boolean
}

const $message =
  getCurrentInstance()?.appContext.config.globalProperties.$message

const router = useRouter()

const submitButtonDisabled = ref<boolean>(false)

const formState = reactive<FormState>({
  username: 'admin',
  password: 'admin',
  rememberMe: false
})

async function onSubmit() {
  await $message?.success('演示模式，登录成功')
  submitButtonDisabled.value = true
  setTimeout(() => {
    router.push('/')
  }, 1500)
}
</script>

<template>
  <profile-layout title="登录">
    <div class="text-center mb10">
      <span class="text-slate-600 mr4">对我们的产品陌生?</span>
      <router-link to="/register" class="text-blue-500">创建账号</router-link>
    </div>
    <v-form class="space-y-6" @submit.prevent>
      <v-form-item label="邮箱">
        <v-input
          v-model:value="formState.username"
          type="text"
          placeholder="输入账号"
          size="large"
        />
      </v-form-item>
      <v-form-item label="密码">
        <v-input
          v-model:value="formState.password"
          type="password"
          placeholder="输入密码"
          size="large"
        />
      </v-form-item>
      <v-form-item>
        <input
          v-model="formState.rememberMe"
          type="checkbox"
          class="vertical-middle mr2"
        />
        <span class="text-sm text-slate-600">记住密码</span>
      </v-form-item>
      <v-form-item>
        <v-button
          type="primary"
          size="large"
          block
          class="!text-base"
          :disabled="submitButtonDisabled"
          @click="!submitButtonDisabled && onSubmit()"
          >登录账号</v-button
        >
      </v-form-item>
      <div class="text-center">
        <router-link to="/" class="text-blue-500 text-sm"
          >忘记密码?</router-link
        >
      </div>
    </v-form>
    <div class="h-[1px] bg-gray-300 my8"></div>
    <div class="text-sm text-center text-slate-600 mb4">
      或使用以下方式登录：
    </div>
    <div class="flex justify-center items-center">
      <a href="#" class="px2">
        <FontAwesomeIcon :icon="faQq" class="text-blue" />
      </a>
      <a href="#" class="px2">
        <FontAwesomeIcon :icon="faWeixin" class="text-green-500" />
      </a>
      <a href="#" class="px2">
        <FontAwesomeIcon :icon="faWeibo" class="text-orange" />
      </a>
    </div>
  </profile-layout>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
