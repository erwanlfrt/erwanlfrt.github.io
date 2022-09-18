<script setup lang="ts">
import CustomTitle from '@/components/custom-title/CustomTitle.vue';
import { useLanguageStore } from '@/store/LanguageStore';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import json from '@/assets/text/cv.json';

const store = useLanguageStore()
const { language } = storeToRefs(store)

const text = computed (() =>((json as any)[language.value].text))
const button = computed (() =>((json as any)[language.value].button))
</script>
<template>
  <div class="section">
    <custom-title title="Curriculum Vitae"></custom-title>
    <div class="content">
      <p>
        {{text}}
      </p>
      <div class="button-wrapper">
        <a :href="'/cv/CV_' + language + '_Erwan_LE-FORESTIER.pdf'" target="_blank" rel="noopener noreferrer">{{button}}</a>
      </div>
    </div>
  
  </div>
</template>

<style lang="scss" scoped>
  .section {
    margin-bottom: 30px;

    .content {

      .button-wrapper {
        display: flex;
        justify-content: center;
        a {
          color: white;
          background: #09A17D;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
        }
      }
      
    }
  }
</style>