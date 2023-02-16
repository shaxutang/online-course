<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  starCount: number
}>()
</script>

<template>
  <div v-bind="$attrs" class="space-x-1">
    <FontAwesomeIcon
      :icon="faStar"
      :class="[
        'text-xs text-gray-200 vertical-initial',
        {
          select: index <= starCount
        }
      ]"
      v-for="index in 5"
      :key="index"
    />
  </div>
</template>

<style lang="less" scoped>
.select {
  @apply text-yellow-500;
}
</style>
