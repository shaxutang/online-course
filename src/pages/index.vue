<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import HomeCourseSearch from './components/home/HomeCourseSearch.vue'
</script>

<template>
  <section class="p8">
    <h1 class="text-2xl mb8">推荐课程</h1>
    <div class="border-1 p4 mb8">
      <FontAwesomeIcon
        :icon="faExclamationCircle"
        class="text-yellow-500 text-4xl vertical-middle mr2"
      />
      <span class="font-bold">所有课程均享 30 天退款保证</span>
    </div>
    <home-course-search />
  </section>
</template>
