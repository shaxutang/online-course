<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faClock,
  faPlayCircle,
  faPauseCircle
} from '@fortawesome/free-solid-svg-icons'

defineProps<{
  episode: number
  totalTime: string
  title: string
  description: string
  isPlay: boolean
}>()
</script>

<template>
  <div
    v-bind="$attrs"
    class="flex h45 border-1 border-gray-100 b-rd-4 overflow-hidden active:scale-98"
  >
    <div class="min-w45 flex-ji-center bg-slate-100">
      <div class="text-5xl">{{ episode }}</div>
    </div>
    <div class="w150 py6 ml4 space-y-4">
      <div class="text-xs text-gray-400">
        <FontAwesomeIcon :icon="faClock" />
        <span class="ml2"
          >{{ $moment.duration(totalTime, 'seconds').asHours() }} 小时</span
        >
      </div>
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <div
        class="text-sm text-gray-400 text-ellipsis overflow-hidden line-clamp-2"
      >
        {{ description }}
      </div>
    </div>
    <div class="cursor-pointer flex-auto flex-ji-center">
      <FontAwesomeIcon
        :icon="isPlay ? faPauseCircle : faPlayCircle"
        class="text-4xl"
      />
    </div>
  </div>
</template>
