<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
  <div v-bind="$attrs">
    <header
      class="cursor-pointer flex justify-between items-center"
      @click="visibleState = !visibleState"
    >
      <h1>{{ title }}</h1>
      <FontAwesomeIcon :icon="visible ? faAngleUp : faAngleDown" />
    </header>
    <div class="mt4" v-show="visibleState">
      <slot></slot>
    </div>
  </div>
</template>
