<script lang="ts" setup>
const props = defineProps<{
  visible?: boolean
}>()

const emits = defineEmits(['update:visible', 'ok'])

const visibleState = useVModel(props, 'visible', emits, {
  defaultValue: true
})

const defaultValue: () => CourseCatalogue = () => ({
  video: '',
  episode: '',
  title: '',
  description: ''
})

const formState = reactive<CourseCatalogue>(defaultValue())

function onOk() {
  emits('ok', Object.assign({}, formState))
  visibleState.value = false
  Lodash.assign(formState, defaultValue())
}
</script>

<template>
  <modal title="新增一集" v-model:visible="visibleState">
    <v-form>
      <v-form-item>
        <upload
          v-model:value="formState.video"
          title="请选择视频文件"
          :extensions="['mp4']"
        />
      </v-form-item>
      <v-form-item label="集数">
        <v-input v-model:value="formState.episode" />
      </v-form-item>
      <v-form-item label="标题">
        <v-input v-model:value="formState.title" />
      </v-form-item>
      <v-form-item label="剧集简介">
        <v-textarea v-model:value="formState.description" />
      </v-form-item>
    </v-form>
    <div class="text-right space-x-2">
      <v-button type="primary" @click="onOk">确定</v-button>
      <v-button type="info" @click="visibleState = false">取消</v-button>
    </div>
  </modal>
</template>
