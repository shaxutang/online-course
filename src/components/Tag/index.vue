<script lang="ts" setup></script>

<template>
  <div
    v-bind="$attrs"
    class="inline-block px4 py1 text-sm border-1 border-gray-100 bg-white b-rd-2"
  >
    <slot></slot>
  </div>
</template>
