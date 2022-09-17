<script setup lang="ts">
import MenuBar from '@/components/menu-bar/MenuBar.vue'
</script>
<template>
  <menu-bar></menu-bar>
  <div id="core">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto/roboto-v29-latin-regular.woff") format("woff"),
  url("@/assets/fonts//Roboto/roboto-v29-latin-regular.woff2") format("woff2")
}

html,body {
  margin:0;
  padding:0;
  height: 100%;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  

  #core {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}
</style>
