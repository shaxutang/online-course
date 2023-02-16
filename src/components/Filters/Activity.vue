<script lang="ts" setup>
import { ActivityStateProvider } from './types'

const instance = getCurrentInstance()

const key = instance?.vnode.key || instance?.uid

const activityStateProvider = inject<ActivityStateProvider>(
  'ActivityStateProvider'
)

const isActive = computed(() =>
  activityStateProvider?.type === 'single'
    ? activityStateProvider?.activityState.value === key
    : Array.from(activityStateProvider?.activityState.value || []).includes(key)
)

function onclick() {
  const type = activityStateProvider?.type
  if (type === 'single') {
    activityStateProvider?.setActivityState(isActive.value ? undefined : key)
  } else {
    const activeState: string[] =
      activityStateProvider?.activityState.value || []
    if (isActive.value) {
      const index = activeState.findIndex((state) => key === state)
      activeState.splice(index, 1)
    } else {
      activeState.push(key as string)
    }
    activityStateProvider?.setActivityState([...activeState])
  }
}
</script>

<template>
  <div role="activity" v-bind="$attrs" @click="onclick">
    <slot :isActive="isActive"></slot>
  </div>
</template>
