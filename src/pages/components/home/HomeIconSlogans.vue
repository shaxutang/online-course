<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlayCircle, faStar, faLink } from '@fortawesome/free-solid-svg-icons'

const iconSlogans = [
  {
    icon: faPlayCircle,
    title: '通过 213000 多个视频课程学习必备技能'
  },
  {
    icon: faStar,
    title: '选择由现实世界的专家教授的课程'
  },
  {
    icon: faLink,
    title:
      '按自己的节奏学习，终生可以在手机和台式机上进行访问所有“室内设计”课程'
  }
]
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-around md:items-center">
    <div
      class="flex items-center py4 md:py0 md:space-x-4"
      v-for="(iconSlogan, index) in iconSlogans"
    >
      <FontAwesomeIcon
        :icon="iconSlogan.icon"
        class="text-4xl text-slate-500 mr4 md:mr0"
      />
      <div class="font-bold">{{ iconSlogan.title }}</div>
    </div>
  </div>
</template>
