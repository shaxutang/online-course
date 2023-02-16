<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="flex-ji-center min-hscreen bg-gray-100" v-bind="$attrs">
    <div class="w130 px15 py12 bg-white b-rd-1 drop-shadow">
      <h1 class="mb2 text-8 text-center font-bold">{{ title }}</h1>
      <slot></slot>
    </div>
  </section>
</template>
