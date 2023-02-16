<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string
    checked: boolean
    dataCount: number
  }>(),
  {
    title: '',
    checked: false,
    dataCount: 0
  }
)
</script>

<template>
  <div v-bind="$attrs" class="flex items-center space-x-2">
    <input type="checkbox" :checked="checked" />
    <span class="text-sm text-gray-600">{{ title }}</span>
    <span class="text-sm text-gray-400">({{ dataCount }})</span>
  </div>
</template>
