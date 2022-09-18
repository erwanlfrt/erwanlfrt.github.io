<script setup lang="ts">
import CustomTitle from '@/components/custom-title/CustomTitle.vue';
import ProjectTile from '@/components/project-tile/ProjectTile.vue';

const projects = [
  'youtongue',
  'boussole',
  'sweetch'
]
</script>

<template>
  <div class="projects">
    <custom-title title="My projects"/>
    <div class="project-list">
      <project-tile 
        v-for="(project, index) in projects" 
        :key="index" 
        :project="project"
      />
    </div>
  </div>
</template>
