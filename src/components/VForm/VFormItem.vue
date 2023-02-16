<script lang="ts" setup>
defineProps<{
  label?: string
  name?: string
}>()
</script>

<template>
  <div v-bind="$attrs" class="not-last:mb6">
    <div class="text-sm text-slate-600 mb2" v-if="label">{{ label }}</div>
    <slot></slot>
  </div>
</template>
