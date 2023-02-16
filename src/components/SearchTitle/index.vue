<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

defineEmits(['onSearch'])
</script>

<template>
  <header class="flex justify-between items-center">
    <h1 class="text-xl font-bold">
      <slot></slot>
    </h1>
    <button class="bg-white w8 h8 b-rd-2" @click="$emit('onSearch', $el)">
      <FontAwesomeIcon :icon="faSearch" class="text-sm text-slate-600" />
    </button>
  </header>
</template>
