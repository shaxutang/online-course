<script lang="ts" setup>
withDefaults(
  defineProps<{
    disabled?: boolean
    type?: 'primary' | 'success' | 'danger' | 'warn' | 'info'
    size?: 'small' | 'middle' | 'large'
    block?: boolean
  }>(),
  {
    size: 'middle'
  }
)
</script>

<template>
  <button
    v-bind="$attrs"
    class="px4 py1 bg-gray-200 text-sm text-slate-600 b-rd-1"
    :class="{
      'cursor-not-allowed': disabled,
      '!bg-blue-500 !text-white': type === 'primary',
      '!bg-green-500 !text-white': type === 'success',
      '!bg-red-500 !text-white': type === 'danger',
      '!bg-yellow-500 !text-white': type === 'warn',
      '!bg-gray-400 !text-white': type === 'info',
      py1: size === 'small',
      py2: size === 'middle',
      'py3 text-base': size === 'large',
      wfull: block
    }"
  >
    <span>
      <slot name="icon"></slot>
    </span>
    <slot></slot>
  </button>
</template>
