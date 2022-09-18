<script setup lang="ts">
import { StringLiteral } from '@babel/types';
import TechnoTag from '@/components/techno-tag/TechnoTag.vue';
import json from "@/assets/text/projects";
import { computed } from 'vue';
import { useLanguageStore } from '@/store/LanguageStore';
import { storeToRefs } from 'pinia';

type Tag = {
  name: string;
  color: string;
}

type Project = {
  name: string;
  logo: string;
  background: string | undefined;
  description: string;
  color: string;
  url: string;
  tags: Tag[];
}
type Props = {
  project: string
}

const props = defineProps<Props>(); // eslint-disable-line

const project = json[props.project]

const store = useLanguageStore()
const { language } = storeToRefs(store)
const description = computed (() =>((json as any)[props.project].description[language.value]))

</script>

<template>
  <a class="project-tile" :href="project.url">
    <div class="upper" :style="project.background !== ''? ({'background-image': 'url(' + require('../../assets/screenshots/' +project.background) + ')'}) : ''">
      <div class="logo-wrapper">
        <img :src="require('../../assets/logo/' + project.logo)" :alt="project.name" class="logo">
      </div>
    </div>
    <div class="lower" :style="{'border-top': '1px solid ' + project.color}">
      <h2>{{project.name}}</h2>
      <span>{{description}}</span>
      <div class="tags">
        <techno-tag v-for="(tag, index) in project.tags" :key="index" :name="tag.name" :color="tag.color"></techno-tag>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
  .project-tile {
    display: flex;
    flex-direction: column;
    width: 350px;
    border-radius: 15px;
    border: 1px solid grey;
    overflow: hidden;
    margin-bottom: 15px;
    text-decoration: none;
    color: black;
    .upper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 75px;
      background-size: cover;

      .logo-wrapper {
        backdrop-filter: blur(2px);
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .logo {
          width: 40px;
        }
      }
    }

    .lower {
      display: flex;
      flex-direction: column;
      padding: 10px 15px;

      h2 {
        margin: 0;
        font-size: 20px;

      }

      span {
        margin-top: 5px;
        margin-bottom: 15px;
        color: #6b6b6b;
      }

      .tags {
        display: flex;
      }
    }
  }
</style>



