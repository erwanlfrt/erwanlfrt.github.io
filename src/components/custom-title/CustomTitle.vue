<script setup lang="ts">
  type Props = {
    title: string
  }
  const props = defineProps<Props>() // eslint-disable-line
</script>

<template>
  <h1 class="custom-title">{{title}}</h1>
</template>

<style scoped lang="scss">
  .custom-title {
    font-size: 23px;
    position: relative;
    &::after {
      content: '';
      width: 20px;
      border-bottom: solid 4px #09A17D;
      position: absolute;
      bottom: -4px;
      left: 0;
    }
  }
</style>