<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    visible?: boolean
    title?: string
    text: string
    ok?: () => void
    cancel?: () => void
  }>(),
  {
    title: '确认框'
  }
)

const visible = ref<boolean>(props.visible || false)

function ok() {
  props.ok && props.ok()
}

function cancel() {
  visible.value = false
  props.cancel && props.cancel()
}
</script>

<template>
  <modal title="确认框" :visible="visible">
    <div class="text-sm">确定要退出登录吗?</div>
    <div class="flex justify-end space-x-2">
      <v-button type="primary" @click="ok">确定</v-button>
      <v-button type="info" @click="cancel">取消</v-button>
    </div>
  </modal>
</template>
