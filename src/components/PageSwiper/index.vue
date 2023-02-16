<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

defineProps<{
  current: number
  total: number
}>()

defineEmits(['pre', 'next'])
</script>

<template>
  <div v-bind="$attrs" class="text-xs text-slate-500">
    <FontAwesomeIcon
      :icon="faChevronLeft"
      class="cursor-pointer hover:text-slate-800"
      @click="$emit('pre', $el)"
    />
    <span class="px2">{{ current }}/{{ total }}</span>
    <FontAwesomeIcon
      :icon="faChevronRight"
      class="cursor-pointer hover:text-slate-800"
      @click="$emit('next', $el)"
    />
  </div>
</template>
