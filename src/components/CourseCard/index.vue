<script lang="ts" setup>
defineProps<{
  img: string
  title: string
  description: string
  statistics: {
    starCount: number
    courseCount: {
      current: number
      total: number
    }
    tags: string[]
  }
}>()
</script>

<template>
  <div v-bind="$attrs" class="flex max-w-200 p4 h40 bg-white b-rd-2 space-x-4">
    <div class="w0 lg:min-w-40 b-rd-2 overflow-hidden">
      <img :src="img" alt="course" class="wfull hfull object-cover" />
    </div>
    <div class="space-y-4 overflow-hidden">
      <h1 :title="title" class="wfull font-800 single-line-ellipsis">
        {{ title }}
      </h1>
      <div class="text-sm text-gray-500 break-all ellipsis-line-2">
        {{ description }}
      </div>
      <course-statistics v-bind="statistics" />
    </div>
  </div>
</template>
