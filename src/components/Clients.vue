<script setup>
import image1 from '@/assets/ipi.png';
import image2 from '@/assets/gms.png';
import image3 from '@/assets/ministry-of-defence.png';
import image4 from '@/assets/ipi.png';
import image5 from '@/assets/gms.png';
import image6 from '@/assets/ministry-of-defence.png';

// Image list
const images = [image1, image2, image3, image4, image5, image6];

// Function to pause the animation on hover
const pauseScroll = () => {
  const track = document.querySelector('.carousel-track');
  if (track) track.style.animationPlayState = 'paused';
};

// Function to resume the animation after hover
const resumeScroll = () => {
  const track = document.querySelector('.carousel-track');
  if (track) track.style.animationPlayState = 'running';
};
</script>


<template>
    <div class="px-20 py-10">

<h1 class="text-left text-5xl py-10 text-black  ">Our Clients</h1>


    <div
      class="carousel-container"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <div class="carousel-track">
        <!-- Duplicating the images array to create the infinite scroll effect -->
        <div v-for="(image, index) in images" :key="'first-' + index" class="carousel__item">
          <img :src="image" alt="Logo" />
        </div>
        <div v-for="(image, index) in images" :key="'second-' + index" class="carousel__item">
          <img :src="image" alt="Logo" />
        </div>
      </div>
    </div>
</div>
  </template>
  
  <style scoped>
  .carousel-container {
      display: flex;
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
      overflow: hidden;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
  }
  
  .carousel-track {
    display: flex;
    animation: scroll 20s linear infinite; /* 20s duration for smooth scrolling */
    white-space: nowrap;
  }
  
  .carousel__item {
    flex: 0 0 auto;
    width: 150px; /* Adjust width to control how many logos per viewport */
    margin-right: 40px; /* Adjust spacing between logos */
  }
  
  .carousel__item img {
    width: 100%;
    height: auto;
    filter: grayscale(100%); /* Convert images to grayscale */
  }
  
  .carousel__item img:hover {
      filter: grayscale(0%); /* Remove grayscale on hover */
  }
  
  /* Animation for infinite scrolling */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Adjust this value based on how many items you have */
    }
  }
  </style>
  