<script lang="ts" setup>
defineProps<{
  avatar: string
  name: string
  description: string
}>()
</script>

<template>
  <div v-bind="$attrs" class="inline-flex items-center space-x-4">
    <div class="inline-block b-rd-50 overflow-hidden">
      <img :src="avatar" :alt="name" width="50" height="50" />
    </div>
    <div>
      <h1 class="font-bold">{{ name }}</h1>
      <div class="text-slate-400 text-sm">{{ description }}</div>
    </div>
  </div>
</template>
