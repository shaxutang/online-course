<script lang="ts" setup></script>

<template>
  <section v-bind="$attrs" class="flex h-screen overflow-hidden">
    <aside-bar />
    <main class="flex-auto">
      <div class="hfull b-rd-4 bg-white overflow-auto">
        <slot></slot>
      </div>
    </main>
  </section>
</template>
