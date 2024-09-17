<script setup>
import TheWelcome from '../components/Hero.vue'
import TheWhatWeDo from '../components/WhatWeDo.vue'
import TheVirtualTour from '../components/VirtualTour.vue'
import TheStats from '../components/stats.vue'
import theCategories from '../components/Categories.vue'
import TheProjects from '../components/Projects.vue'
import TheMapview from '../components/MapView.vue'
import TheClients from '../components/Clients.vue'
import ThePartners from '../components/Partners.vue'
import TheTeam from '../components/Team.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <TheWhatWeDo/>
    <TheVirtualTour/>
    <TheStats/>
    <TheProjects/>
    <theCategories/>
    <TheMapview/>
    <TheClients/>
    <ThePartners/>
    <TheTeam/>

  </main>
</template>
