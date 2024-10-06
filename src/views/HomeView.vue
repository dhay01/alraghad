<script setup>
import TheWelcome from '../components/home/Hero.vue'
import TheWhatWeDo from '../components/home/WhatWeDo.vue'
import TheVirtualTour from '../components/home/VirtualTour.vue'
import TheStats from '../components/home/stats.vue'
import theCategories from '../components/home/Categories.vue'
import TheProjects from '../components/home/Projects.vue'
import TheMapview from '../components/home/MapView.vue'
import TheClients from '../components/home/Clients.vue'
import ThePartners from '../components/home/Partners.vue'
import TheTeam from '../components/home/Team.vue'
import Therivews from '../components/home/Reviews.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <TheWhatWeDo/>
    <TheVirtualTour/>
    <TheStats/>
    <TheProjects/>
<!--    <theCategories/>-->
    <TheMapview/>

    <TheTeam/>
    <ThePartners/>
    <Therivews/>

  </main>
</template>
