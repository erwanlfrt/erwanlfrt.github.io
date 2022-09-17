<script setup lang="ts">
import LanguageSelector from '../language-selector/LanguageSelector.vue';
</script>
<template>
  <div class="menu-bar">
    <div class="center">
      <span class="name">Erwan LE FORESTIER</span>
      <div class="links">
        <a href="https://github.com/erwanlfrt/" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/github.svg" class="link-icon"/></a>
        <a href="https://www.linkedin.com/in/erwanlfrt/" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/linkedin.svg" class="link-icon"/></a>
      </div>
    </div>
    <language-selector></language-selector>
  </div>
</template>

<style lang="scss" scoped>
  .menu-bar {
    background: black;
    color: white;
    width: 100%;
    padding: 10px 0;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .center {
      display: flex;
      flex-direction: column;
    }
    .name {
      position: relative;
      font-weight: bold;
    }
    .name::after {
      content: '';
      width: 30%;
      border-bottom: solid 1px white;
      position: absolute;
      left: 35%;
      bottom: -10px;
    }

    .links {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .link-icon {
        width: 20px;
        margin: 0 5px;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(238deg) brightness(104%) contrast(101%);
      }
    }


  }
</style>