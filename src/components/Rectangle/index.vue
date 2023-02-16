<script lang="ts" setup></script>

<template>
  <div
    v-bind="$attrs"
    class="cursor-pointer h14 lh-14 text-center border-1 hover-bg-gray-100 transition-all"
  >
    <slot></slot>
  </div>
</template>
