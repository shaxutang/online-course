<script lang="ts" setup></script>

<template>
  <form v-bind="$attrs" @submit.prevent>
    <slot></slot>
  </form>
</template>
