<script setup>
import projectCard from './ProjectCard.vue';

</script>
<template>

<div class="px-20 py-10">

    <h1 class="text-left text-5xl py-10 text-black  ">featured projects</h1>


    <div className="carousel carousel-center  rounded-box max-w-full space-x-10 p-4">
  <div className="carousel-item">
    <projectCard/>
  </div>
  <div className="carousel-item">
    <projectCard/>
  </div>
  <div className="carousel-item">
    <projectCard/>
  </div>
  <div className="carousel-item">
    <projectCard/>
  </div>
  <div className="carousel-item">
    <projectCard/>
  </div>
  <div className="carousel-item">
    <projectCard/>
  </div>
  <div className="carousel-item">
    <projectCard/>
  </div>
</div>
    </div>

    
</template>
