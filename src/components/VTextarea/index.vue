<script lang="ts" setup>
const props = defineProps<{
  value?: string
}>()

const emits = defineEmits(['update:value'])

const valueState = useVModel(props, 'value', emits)
</script>

<template>
  <textarea
    class="outline-none wfull min-h-20 text-sm border-1 p2 text-slate-600"
    v-model="valueState"
    v-bind="$attrs"
  ></textarea>
</template>
