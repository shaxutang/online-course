<script lang="ts" setup></script>

<template>
  <profile-layout title="创建帐户">
    <div class="text-center mb10">
      <span class="text-slate-600 mr4">已有帐户吗?</span>
      <router-link to="/login" class="text-blue-500">登录</router-link>
    </div>
    <v-form class="space-y-6" @submit.prevent>
      <v-form-item label="邮箱">
        <v-input type="text" placeholder="输入邮箱账号" size="large" />
      </v-form-item>
      <v-form-item label="密码">
        <v-input type="password" placeholder="输入密码" size="large" />
      </v-form-item>
      <v-form-item label="确认密码">
        <v-input type="password" placeholder="再次输入密码" size="large" />
      </v-form-item>
      <v-form-item>
        <v-button
          type="primary"
          size="large"
          block
          @click="$message.danger('演示模式，注册失败')"
          >注册</v-button
        >
      </v-form-item>
    </v-form>
    <div class="text-sm text-center text-slate-600 mt6 mb2">
      通过创建帐户，您将同意我们的
    </div>
    <a href="#" class="block text-center text-blue text-sm">服务条款</a>
  </profile-layout>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
