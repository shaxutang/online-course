<script lang="ts" setup></script>

<template>
  <div v-bind="$attrs" class="flex hfull">
    <div class="flex-2/5 p8 bg-slate-100 overflow-auto">
      <slot name="second"></slot>
    </div>
    <div class="flex-3/5 p8 bg-white overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>
