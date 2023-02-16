<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: 'small' | 'middle' | 'large'
    value?: string
  }>(),
  {
    size: 'middle'
  }
)

const emits = defineEmits(['update:value'])

const valueState = useVModel(props, 'value', emits)
</script>

<template>
  <div class="border-1 border-slate-200 b-rd-1 overflow-hidden">
    <input
      class="wfull px2 outline-none text-slate-600 text-sm placeholder-font-normal"
      :class="{
        py1: size === 'small',
        py2: size === 'middle',
        py3: size === 'large'
      }"
      v-model="valueState"
      v-bind="$attrs"
    />
  </div>
</template>
