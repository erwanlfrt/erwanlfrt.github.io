<script setup lang="ts">
type Props = {
  name: string;
  color: string;
}

const props = defineProps<Props>(); // eslint-disable-line
</script>

<template>
  <div class="techno-tag" :style="{'background': color}">
    {{name}}
  </div>
</template>

<style lang="scss" scoped>
  .techno-tag {
    padding: 5px 15px;
    border-radius: 100px;
    color: white;
    margin-right: 5px;
    font-size: 14px;
  }
</style>

