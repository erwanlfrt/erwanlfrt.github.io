<script setup lang="ts">
import CustomTitle from '@/components/custom-title/CustomTitle.vue';
import { useLanguageStore } from '@/store/LanguageStore';
import { storeToRefs } from 'pinia';
import json from '@/assets/text/contact.json';
import { computed } from 'vue';

const store = useLanguageStore()
const { language } = storeToRefs(store)

const beforePN = computed (() =>((json as any)[language.value].beforePN))
const afterPN = computed (() =>((json as any)[language.value].afterPN))
const afterMA = computed (() =>((json as any)[language.value].afterMA))
</script>

<template>
  <div class="section">
    <custom-title title="Contact"></custom-title>
    <p>
      {{beforePN}}
      <a href="tel:33783613196">+33 7 83 61 31 96</a> 
      {{afterPN}}
      <a href="mailto:leforestiererwan@gmail.com">leforestiererwan@gmail.com</a>
      {{afterMA}}
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .section {
    margin-bottom: 50px;
    a {
      color: #09A17D;
    }
  }
</style>