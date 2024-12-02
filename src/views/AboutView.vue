<script setup>
import About from '../components/about/About.vue'
import Hero from '../components/about/Hero.vue'
import Timeline from "../components/about/Timeline.vue"
import ScopeOfWork from "@/components/about/ScopeOfWork.vue";
import Text from "@/components/about/Text.vue";

</script>

<template>
  <main>
    <Hero/>

    <div class="px-5 sm:px-10 md:px-20 py-10 py-10 mx-auto px-2 ">

      <Text/>

    </div>
    <ScopeOfWork/>
    <div class="px-5 sm:px-10 md:px-20 py-10  mx-auto px-2 py-10">

      <About/>

    </div>
    <div class="px-5 sm:px-10 md:px-20 py-10 mx-auto px-2 py-10">

      <Timeline/>
    </div>


  </main>
</template>

<style scoped>

</style>