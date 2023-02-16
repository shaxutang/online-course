<script lang="ts" setup>
const props = defineProps<{
  currentCatalogue?: CourseCatalogue
  courseCatalogues: CourseCatalogue[]
}>()

const emits = defineEmits(['update:currentEpisode', 'onchange'])

const currentCatalogueState = useVModel(props, 'currentCatalogue', emits)

/**
 * 统计总课时
 */
const totalTime = computed(() =>
  Array.from(props.courseCatalogues)
    .map((c) => parseInt((c as CourseCatalogue).totalTime))
    .reduce((c1, c2) => c1 + c2)
)

/**
 * 点击修改当前课程值
 * @param course 课程
 */
function onclick(course: CourseCatalogue) {
  currentCatalogueState.value = course
}

watch(
  () => currentCatalogueState.value,
  async (course) => {
    emits('onchange', course)
  }
)
</script>

<template>
  <section>
    <header class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">课程目录</h1>
      <div class="text-sm text-gray-600">
        <span>{{ courseCatalogues.length }} 节</span>
        <span> . </span>
        <span>
          {{ $moment.duration(totalTime, 'seconds').asMinutes() }} 分钟</span
        >
      </div>
    </header>
    <div class="py4">
      <div
        class="cursor-pointer not-last-mb4"
        v-for="episode in courseCatalogues"
        @click="onclick(episode)"
      >
        <episode
          v-bind="{
            ...episode,
            isPlay: currentCatalogueState?.episode === episode.episode
          }"
          class="hover:shadow-lg transition-all"
        />
      </div>
    </div>
  </section>
</template>
