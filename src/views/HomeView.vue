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

<style lang="scss">
  .home {
    display: flex;
    justify-content: center;
    width: 60%;
    justify-content: space-evenly;
    margin-top: 50px;
    flex-wrap: wrap-reverse;


    .right {
      width: 425px;
      margin: 0 5px;
      p {
        color: #6b6b6b;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .home {
      width: 100%;
    }
  }
</style>