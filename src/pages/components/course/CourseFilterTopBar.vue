<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'

type Tab = {
  key: string
  name: string
}

const emits = defineEmits(['onchange', 'update:page'])

/**
 * 过滤结果实例
 */
const filterRef = ref()

/**
 * 请求课程状态信息
 */
const { data: tabs } = useFetchRequest('/course/states', {
  initialData: []
}).json()

/**
 * 请求课程标签信息
 */
const { data: tags } = useFetchRequest('/course/tags', {
  initialData: []
}).json()

/**
 * 过滤参数 Ref实例
 */
const filter = ref<Record<string, any>>({
  state: '',
  tag: '',
  current: 1
})

watch(
  () => filter.value,
  async (val) => {
    emits('onchange', val)
  }
)
</script>

<template>
  <filters ref="filterRef" v-model:filter="filter" class="space-y-4">
    <activities name="state" class="flex space-x-4">
      <activity :key="tab.key" v-slot="{ isActive }" v-for="tab in tabs.data"
        ><span
          :class="[
            'cursor-pointer text-gray-500 text-sm',
            {
              'tab-active': isActive
            }
          ]"
          >{{ tab.name }}</span
        ></activity
      >
    </activities>
    <activities name="tag" type="multi" class="flex space-x-4">
      <activity
        :key="tag"
        v-slot="{ isActive }"
        class="cursor-pointer"
        v-for="tag in tags.data"
      >
        <tag
          :class="{
            ' !bg-blue text-white': isActive
          }"
          >{{ tag }}</tag
        >
      </activity>
    </activities>
    <!-- 分页显示&重置按钮 -->
    <div class="flex justify-between items-center mt4">
      <!-- 分页信息 -->
      <div>
        <slot name="exact"></slot>
      </div>
      <v-button @click="filterRef.reset()">
        <template #icon>
          <FontAwesomeIcon :icon="faRefresh" />
        </template>
        重置
      </v-button>
    </div>
  </filters>
</template>

<style lang="less" scoped>
.tab-active {
  @apply text-blue;
}
</style>
