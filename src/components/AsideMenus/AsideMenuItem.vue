<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

defineProps<{
  icon?: IconDefinition
  path?: string
}>()

const instance = getCurrentInstance()
</script>

<template>
  <div
    v-bind="$attrs"
    :class="[
      'cursor-pointer my3 text-center text-stone-600 hover:text-white',
      {
        active: $route.matched
          .map((match) => match.path)
          .includes(instance?.vnode.key as string)
      }
    ]"
  >
    <router-link :to="path || '/'" v-if="path">
      <div v-if="icon">
        <FontAwesomeIcon :icon="icon" class="mb1" />
      </div>
      <div class="text-xs">
        <slot />
      </div>
    </router-link>
    <div v-else>
      <div v-if="icon">
        <FontAwesomeIcon :icon="icon" class="mb1" />
      </div>
      <div class="text-xs">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.active {
  @apply relative text-white;

  &::after {
    content: '';
    @apply absolute right-0 bottom-0 w1 hfull b-rd-tl-1 b-rd-bl-1 bg-white;
  }
}
</style>
