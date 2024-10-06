<script setup>
import img1 from '@/assets/111.jpg';
import img2 from '@/assets/112.jpg';
import img3 from '@/assets/113.jpg';
import img4 from '@/assets/114.jpg';
import img5 from '@/assets/115.jpg';
import img6 from '@/assets/116.jpg';
import img7 from '@/assets/117.jpg';
import img8 from '@/assets/118.jpg';
import img9 from '@/assets/119.jpg';

// Image list
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
  <div class="px-5 md:px-20 py-10">
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">Our Partners</h1>

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
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  max-width: 1200px; /* Maximum width for larger screens */
  margin-left: auto;
  margin-right: auto;
}

.carousel-track {
  display: flex;
  animation: scroll 20s linear infinite;
  white-space: nowrap;
}

.carousel__item {
  flex: 0 0 auto;
  width: 100px;
  margin-right: 20px;
}

.carousel__item img {
  width: 100%;
  height: auto;
  filter: grayscale(100%);
}

.carousel__item img:hover {
  filter: grayscale(0%);
}

/* Animation for infinite scrolling */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Media Queries for responsiveness */

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .carousel__item {
    width: 120px;
    margin-right: 30px;
  }
}

/* Large devices (desktops, 1024px and up) */
@media (min-width: 1024px) {
  .carousel__item {
    width: 150px;
    margin-right: 40px;
  }
}
</style>
