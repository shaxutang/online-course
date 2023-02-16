<script lang="ts" setup>
import DPlayer from 'dplayer'
import anime from 'animejs/lib/anime.es.js'
import { createDPlayer } from '@/ustils/DPlayer'

const route = useRoute()

/**
 * 课程详情wrapper Ref实例
 */
const wrapperRef = ref<HTMLElement>()

/**
 * 渲染视频dom Ref实例
 */
const videoRef = ref()

/**
 * DPlayer Ref实例
 */
const dp = ref<DPlayer>()

/**
 *
 */
const currentCourseCatalogue = ref<CourseCatalogue>()

/**
 * 课程详情API地址
 */
const detailUrl = ref('')

/**
 * 发送请求，响应式请求状态，结果，执行函数
 */
const {
  isFinished: detailFinished,
  data: detail,
  execute: detailExecute
} = useFetchRequest(detailUrl, {
  immediate: false,
  initialData: {}
})
  .get()
  .json()

/**
 * 课程集数API地址
 */
const courseCataloguesUrl = ref('')

/**
 * 发送请求，响应式请求状态，结果，执行函数
 */
const {
  isFinished: courseCataloguesFinished,
  data: courseCatalogues,
  execute: courseCataloguesExecute
} = useFetchRequest(courseCataloguesUrl, {
  immediate: false,
  initialData: {}
})
  .get()
  .json()

/**
 * 渲染当前课程详情页面数据
 */
async function renderCourse() {
  // 销毁DPlayer
  dp.value?.destroy()
  // 修改详情请求地址courseId
  detailUrl.value = `/course/detail/${route.params.courseId}`
  // 发送请求
  await detailExecute()
  // 修改课程集数信息请求地址courseId
  courseCataloguesUrl.value = `/course/catalogue/${route.params.courseId}`
  // 发送请求
  await courseCataloguesExecute()
  // 播放器默认播放第一集
  const courseCataloguesData = courseCatalogues.value.data
  if (courseCataloguesData && courseCataloguesData.length > 0) {
    currentCourseCatalogue.value = courseCatalogues.value.data[0]
  }
  // 请求完成后过渡详情页面
  anime({
    targets: wrapperRef.value,
    translateX: [-30, 0],
    opacity: [0, 1]
    // duration: 4000
  })
}

/**
 * 监听当前课程集数变化
 */
watch(
  () => currentCourseCatalogue.value,
  async (course) => {
    dp.value = createDPlayer(course!.video, videoRef.value)
  }
)

/**
 * 监听路由地址变化，刷新课程信息
 */
watch(
  () => route.params,
  async () => {
    renderCourse()
  },
  {
    immediate: true
  }
)
</script>

<template>
  <section ref="wrapperRef">
    <!-- 课程视频 -->
    <div ref="videoRef" class="max-h120 b-rd-4 overflow-hidden"></div>
    <div v-if="detailFinished">
      <div class="mt5 space-y-5">
        <!-- 课程统计信息 -->
        <course-statistics v-bind="detail.data.statistics" />
        <!-- 课程正文内容 -->
        <h1 class="text-3xl font-bold">{{ detail.data.title }}</h1>
        <div class="text-gray-400 text-sm">
          {{ detail.data.description }}
        </div>
        <!-- 课程作者 -->
        <author v-bind="detail.data.author" />
      </div>
      <div class="mt6">
        <!-- 课程目录 -->
        <course-content
          v-model:current-catalogue="currentCourseCatalogue"
          :course-catalogues="courseCatalogues.data"
          v-if="courseCataloguesFinished"
        />
      </div>
    </div>
  </section>
</template>
