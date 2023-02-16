<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
  shadow?: boolean
}>()
</script>

<template>
  <header
    v-bind="$attrs"
    class="p8 bg-white"
    :class="{
      'shadow-sm': shadow
    }"
  >
    <h1 class="text-xl font-bold mb2">{{ title }}</h1>
    <div class="lg:w50% text-sm text-gray-400">{{ description }}</div>
  </header>
</template>
