<script lang="ts" setup>
import { FilterStateProvider, ActivityStateProvider } from './types'

const props = withDefaults(
  defineProps<{
    name: string
    type?: 'single' | 'multi'
  }>(),
  {
    type: 'single'
  }
)

/**
 * 注入Filters组件注入的函数信息
 */
const filterStateProvider = inject<FilterStateProvider>('filterStateProvider')

/**
 * 当前过滤参数
 */
const filterState = filterStateProvider!.filterState

/**
 * 初始化组件对应属性名的值
 */
const activityState = ref<any>(filterState.value[props.name] || undefined)

/**
 * 注册清除属性值函数
 */
filterStateProvider?.registerClearInvoke(() => {
  activityState.value = props.type === 'single' ? undefined : []
})

/**
 * 提供当前属性值函数
 */
provide<ActivityStateProvider>('ActivityStateProvider', {
  activityState,
  type: props.type,
  setActivityState: (val: any) => {
    activityState.value = val
  }
})

/**
 * 监听当前属性值变化，当属性值发生改变时去修改过滤参数对应的属性值
 */
watch(
  () => activityState.value,
  async (val) => {
    filterStateProvider?.setFilterState(props.name, val)
  }
)
</script>

<template>
  <div v-bind="$attrs" role="activities">
    <slot></slot>
  </div>
</template>
