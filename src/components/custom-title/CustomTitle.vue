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
    position: relative;
    &::after {
      content: '';
      width: 25px;
      border-bottom: solid 5px #09A17D;
      position: absolute;
      bottom: -3px;
      left: 0;
    }
  }
</style>