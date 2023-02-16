<script lang="ts" setup>
const props = defineProps<{
  visible?: boolean
}>()

const emits = defineEmits(['update:visible'])

const visibleState = useVModel(props, 'visible', emits, {
  defaultValue: false
})
</script>

<template>
  <div
    class="fixed top-0 left-0 wscreen hscreen bg-[rgba(0,0,0,.3)]"
    v-bind="$attrs"
    v-if="visibleState"
  >
    <slot></slot>
  </div>
</template>
