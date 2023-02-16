<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  title?: string
  value?: string | string[]
  multi?: boolean
  extensions?: string[]
}>()

const emits = defineEmits(['update:value'])

const $message =
  getCurrentInstance()?.appContext.config.globalProperties.$message

const valueState = useVModel(props, 'value', emits, {
  defaultValue: props.multi ? [] : ''
})

const fileRef = ref()

function checkExtensions(fileNames: string[]) {
  if (
    !props.extensions ||
    (props.extensions && props.extensions.length === 0)
  ) {
    return true
  }

  const _extensions = fileNames.map((fileName) =>
    fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length)
  )

  const index = _extensions.findIndex(
    (_extension) => !props.extensions?.includes(_extension)
  )

  if (index !== -1) {
    $message.warn('不支持该文件格式')
    return false
  }

  return true
}

function onchange(el: Event) {
  const fileNames = Array.from((el.target as any).files).map(
    (file: any) => file.name
  )

  //此处逻辑是选中文件后将文件先上传后再赋值
  // do Request...  => fileName
  if (checkExtensions(fileNames)) {
    valueState.value = props.multi ? fileNames : fileNames[0]
  }
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="relative cursor-pointer flex-ji-center min-h30 p5 bg-gray-200 b-rd-1"
  >
    <input
      type="file"
      class="cursor-pointer z1 absolute top-0 opacity-0 wfull hfull"
      ref="fileRef"
      :multiple="multi"
      @change="onchange"
    />
    <div
      class="space-y-2"
      v-if="multi ?  (valueState as string[]).length > 0:!!valueState"
    >
      <div
        class="text-sm text-slate-600 text-center"
        v-for="name in valueState.slice(0, 5)"
        v-if="typeof valueState === 'object'"
        :key="name"
      >
        {{ name }}
      </div>
      <div class="text-sm text-slate-600 text-center" v-else>
        {{ valueState }}
      </div>
    </div>
    <div class="text-center space-y-2" v-else>
      <FontAwesomeIcon :icon="faPlus" class="text-xl text-slate-400" />
      <h1 class="text-xs" v-if="title">
        {{ title }}{{ extensions && `[仅支持:${extensions.join('/')}]` }}
      </h1>
    </div>
  </div>
</template>
