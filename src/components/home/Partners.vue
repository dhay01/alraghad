<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase';

// Store the logos array
const partners = ref([]);

// Fetch logos from Firestore
async function fetchLogos() {
  try {
    const querySnapshot = await getDocs(collection(db, 'partners'));
    partners.value = querySnapshot.docs.map(doc => doc.data().logo); // Fetch 'logo' field correctly
  } catch (error) {
    console.error("Error fetching logos: ", error);
  }
}

// Pause carousel scroll on hover
const pauseScroll = () => {
  const track = document.querySelector('.carousel-track');
  if (track) track.style.animationPlayState = 'paused';
};

// Resume carousel scroll after hover
const resumeScroll = () => {
  const track = document.querySelector('.carousel-track');
  if (track) track.style.animationPlayState = 'running';
};

// Fetch logos on mount
onMounted(() => {
  fetchLogos();
});
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
        <!-- Loop through the fetched logos and display them -->
        <div v-for="(logo, index) in partners" :key="'first-' + index" class="carousel__item">
          <img :src="logo" alt="Logo" />
        </div>
        <div v-for="(logo, index) in partners" :key="'second-' + index" class="carousel__item">
          <img :src="logo" alt="Logo" />
        </div>
        <div v-for="(logo, index) in partners" :key="'third-' + index" class="carousel__item">
          <img :src="logo" alt="Logo" />
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
  animation: scroll 250s linear infinite;
  white-space: nowrap;
}

.carousel__item {
  flex: 0 0 auto;
  width: 100px;
  margin-right: 20px;
  margin-top: auto;
  margin-bottom: auto;
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
