<script lang="ts" setup>
import CourseFilterTopBar from './CourseFilterTopBar.vue'

type Body = {
  current: number
  size: number
} & Record<string, any>

defineProps<{
  /**
   * 选中课程ID
   */
  activeId?: string
}>()

/**
 * 过滤结果实例
 */
const filterRef = ref()

/**
 * 课程栏目请求地址
 */
const url = ref('/course/columns')

/**
 * 请求体
 */
const body = ref<Body>({
  current: 1,
  size: 10
})

/**
 * 发送请求，响应式响应状态，相应数据
 */
const { isFinished, data } = useFetchRequest(url, {
  refetch: true,
  initialData: {}
})
  .post(body)
  .json()

function onSearch() {}

/**
 * 过滤参数改变时的回调
 * @param filter 改变后的过滤参数
 */
function filterChange(filter: Record<string, any>) {
  Lodash.assign(body.value, filter)
  body.value.current = 1
  body.value.size = 10
}

function preClick() {
  if (body.value.current > 1) {
    body.value = {
      ...body.value,
      current: body.value.current - 1
    }
  }
}

function nextClick() {
  const total = data.value?.data.total || 0
  if (body.value.current < total) {
    body.value = {
      ...body.value,
      current: body.value.current + 1
    }
  }
}
</script>

<template>
  <div class="flex flex-col hfull">
    <!-- 带搜索按钮的标题 -->
    <search-title @onSearch="onSearch" class="mb-4">课程</search-title>
    <!-- 课程过滤组件 -->
    <course-filter-top-bar ref="filterRef" @onchange="filterChange">
      <template #exact>
        <page-swiper
          v-bind="{
            current: body.current,
            total: data?.data.total
          }"
          @pre="preClick"
          @next="nextClick"
          v-if="isFinished"
        />
      </template>
    </course-filter-top-bar>
    <!-- 课程卡片 -->
    <div class="flex-auto mt6 space-y-4 overflow-auto">
      <router-link
        v-for="course in data.data.records"
        :key="course.id"
        :to="`/courses/${course.id}`"
        v-if="isFinished"
        class="relative block"
      >
        <!-- 如果右侧页面展示的是当前卡片对应的课程则展示选中状态 -->
        <div
          class="absolute right-0 top-0 w2 hfull b-rd-tl-1 b-rd-bl-1 bg-gradient-to-l from-blue to-blue-100"
          v-show="activeId === course.id + ''"
        ></div>
        <!-- 课程卡片组件 -->
        <course-card
          v-bind="{
            img: course.img,
            title: course.title,
            description: course.description,
            statistics: course.statistics
          }"
          class="course cursor-pointer"
        />
      </router-link>
    </div>
  </div>
</template>
