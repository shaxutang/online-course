<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const props = defineProps<{
  title?: string
  visible?: boolean
}>()
const emits = defineEmits(['update:visible'])

const visibleState = useVModel(props, 'visible', emits, {
  defaultValue: false
})
</script>

<template>
  <Teleport to="body">
    <v-mask :visible="visibleState" @click="visibleState = false" />
    <transition name="fade">
      <div
        class="fixed top-50% left-50% translate--50% w100 p4 bg-white b-rd-2"
        v-bind="$attrs"
        v-if="visibleState"
      >
        <div class="flex justify-between items-center mb4">
          <h1 v-if="title">{{ title }}</h1>
          <FontAwesomeIcon
            :icon="faTimes"
            class="cursor-pointer"
            @click="visibleState = false"
          />
        </div>
        <slot></slot>
      </div>
    </transition>
  </Teleport>
</template>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  top: 49%;
}
</style>
