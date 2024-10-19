<script setup>
import TheWelcome from '../components/home/Hero.vue';
import TheWhatWeDo from '../components/home/WhatWeDo.vue';
import TheVirtualTour from '../components/home/VirtualTour.vue';
import TheStats from '../components/home/Stats.vue';
import TheCategories from '../components/home/Categories.vue';
import TheProjects from '../components/home/Projects.vue';
import TheMapView from '../components/home/MapView.vue';
import TheClients from '../components/home/Clients.vue';
import ThePartners from '../components/home/Partners.vue';
import TheTeam from '../components/home/Team.vue';
import TheReviews from '../components/home/Reviews.vue';
import TheMarquee from '../components/home/Marquee.vue';
</script>

<template>
  <main>
    <TheWelcome />
    <TheWhatWeDo />
    <TheVirtualTour />
    <TheStats />
    <TheProjects />
    <TheMapView />
    <TheTeam />

    <ThePartners />
    <TheReviews />
  </main>
</template>
