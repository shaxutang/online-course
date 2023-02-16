<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="text-center space-y-4">
    <FontAwesomeIcon :icon="faFolderOpen" class="text-slate-400 text-8xl" />
    <div class="text-gray-600">请从左侧课程栏选择对应的课程</div>
  </div>
</template>
