<script lang="ts" setup>
import { FilterStateProvider } from './types'

const props = withDefaults(
  defineProps<{
    filter?: Record<string, any>
  }>(),
  {
    filter: () => ({})
  }
)

const emits = defineEmits(['update:filter'])

/**
 * 响应式过滤参数
 */
const filterState = useVModel(props, 'filter', emits)

/**
 * 清除选项集合
 * `Activities`组件对应的清除参数需要注册到当前数组中
 */
const clearInvokes = ref<(() => void)[]>([])

/**
 * 提供过滤参数相关函数
 * @filterState 过滤参数
 * @setFilterState 设置过滤参数对应属性的值
 * @registerClearInvoke 新增清除参数
 */
provide<FilterStateProvider>('filterStateProvider', {
  filterState,
  setFilterState: (name: string, value: any) => {
    filterState.value = {
      ...filterState.value,
      [name]: value
    }
  },
  registerClearInvoke: (clear: () => void) => {
    clearInvokes.value = [...clearInvokes.value, clear]
  }
})

/**
 * 重置过滤参数值
 */
function reset() {
  clearInvokes.value.forEach((invoke) => {
    invoke()
  })
}

/**
 * 暴露重置方法
 */
defineExpose({
  reset
})
</script>

<template>
  <div v-bind="$attrs">
    <slot></slot>
  </div>
</template>
