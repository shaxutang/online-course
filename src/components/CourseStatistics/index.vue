<script lang="ts" setup>
defineProps<{
  starCount: number
  courseCount: {
    current: number
    total: number
  }
  tags: string[]
}>()
</script>

<template>
  <div class="flex items-center justify-between">
    <five-star :star-count="starCount" />
    <div class="ml8 text-xs text-gray-600">
      <span class="font-bold text-sm text-black">{{
        courseCount.current
      }}</span>
      <span>/</span>
      <span>{{ courseCount.total }}</span>
    </div>
    <div class="flex-auto text-right">
      <div class="inline-block px4 py1 b-rd-1 text-xs bg-gray-100">
        {{ tags.slice(0, 4).join(' / ') }}
      </div>
    </div>
  </div>
</template>
