<script setup lang="ts">
import ProjectsSection from '@/components/projects-section/ProjectsSection.vue';
import ContactSection from '@/components/contact-section/ContactSection.vue';
import CvSection from '@/components/cv-section/CvSection.vue';
</script>

<template>
  <div class="home">
    <div class="left">
      <projects-section></projects-section>
    </div>
    <div class="right">
      <contact-section></contact-section>
      <cv-section></cv-section>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    width: 60%;
    .left {
      margin-right: 20px;
    }
  }
</style>