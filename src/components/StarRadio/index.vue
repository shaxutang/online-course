<script lang="ts" setup>
withDefaults(
  defineProps<{
    starCount: number
    checked: boolean
    dataCount: number
  }>(),
  {
    starCount: 0,
    checked: false,
    dataCount: 0
  }
)
</script>

<template>
  <div v-bind="$attrs" class="flex items-center space-x-2">
    <input type="radio" :checked="checked" />
    <five-star :star-count="starCount" />
    <span class="text-sm text-gray-600">{{ starCount }}星及以上</span>
    <span class="text-sm text-gray-400">({{ dataCount }})</span>
  </div>
</template>
