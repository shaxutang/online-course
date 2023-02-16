<script lang="ts" setup>
import CoursesFilterBar from './components/course/CoursesFilterBar.vue'
import CourseEmpty from './components/course/CourseEmpty.vue'
</script>

<template>
  <main-layout>
    <template #second>
      <courses-filter-bar :active-id="($route.params.courseId as string)" />
    </template>
    <router-view v-slot="{ Component, route }">
      <div class="flex-ji-center hfull" v-if="route.path === '/courses'">
        <course-empty />
      </div>
      <component
        :is="Component"
        :key="route.meta.usePathKey ? route.fullPath : undefined"
        v-else
      />
    </router-view>
  </main-layout>
</template>

<style lang="less" scoped></style>
