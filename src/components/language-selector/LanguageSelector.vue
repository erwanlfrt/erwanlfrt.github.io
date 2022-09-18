
<script setup lang="ts">
import { ref } from "vue"
import { useLanguageStore } from "@/store/LanguageStore";
const languages = [
  {
    name: 'fr',
    icon: 'french.svg'
  },
  {
    name: 'en',
    icon: 'english.svg'
  }, {
    name: 'de',
    icon: 'german.svg'
  }
]

const isOpen = ref(false)
const emits = defineEmits<{ // eslint-disable-line
  (e: 'language-selected', language: string): void
}>()

const store = useLanguageStore();

const getImgUrl = (pet: string) => {
  return require('../../assets/icons/flags/'+ pet)
}

// #region EVENTS
const onIconClick = () => {
  isOpen.value = !isOpen.value
}

const onLanguageSelected = (language: string) => {

  emits('language-selected', language)
  store.setLanguage(language)
}

// #endregion EVENTS


</script>
<template>
  <div :class="'language-selector ' + (isOpen ? 'panel-open': '')">
    <img src="@/assets/icons/language.svg" alt="select language" class="icon" @click="onIconClick">
    <div class="flags">
      <img v-for="(language, index) in languages" :key="index" :src="getImgUrl(language.icon)" :alt="language.name" class="flag" @click="onLanguageSelected(language.name)">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .language-selector {
    position: absolute;
    right: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    
    .flags {
      display: flex;
      visibility: hidden;

      .flag {
        width: 25px;
        margin: 0 3px;
      }
    }

    .icon {
      width: 30px;
      margin-bottom: 5px;
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(238deg) brightness(104%) contrast(101%);
      cursor: pointer;
    }
  }

  .panel-open {
    background: white;

    .flags {
      visibility: visible;

      .flag {
        cursor: pointer;
      }
    }
    .icon {
      filter: invert(0%) sepia(97%) saturate(3%) hue-rotate(320deg) brightness(102%) contrast(99%);
    }
  }

  @media screen and (max-width: 750px) {
      .language-selector {
        right: 5%;
      }
  }

  @media screen and (max-width: 450px) {
      .language-selector {
        right: 1%;
        zoom: 0.8;
      }
  }
</style>