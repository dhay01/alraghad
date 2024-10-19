<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase';

const hero = ref({});  // Initialize the hero object

// Fetch data from the "hero" collection in Firestore
async function fetchHero() {
  try {
    const querySnapshot = await getDocs(collection(db, "hero"));
    hero.value = querySnapshot.docs[0].data();  // Assuming there's only one document
  } catch (error) {
    console.error("Error fetching hero: ", error);
  }
}

// Run fetchHero on component mount
onMounted(() => {
  fetchHero();
});
</script>

<template>
  <div v-if="hero" class="hero bg-base-200 min-h-[580px] max-h-96 relative bg-cover bg-center"
       :style="{ backgroundImage: `url(${hero.photo})` }">
    <div class="hero-content flex-col lg:flex-row">
      <div class="text-left">
        <!-- Dynamic title -->
        <h1 class="text-3xl md:text-4xl text-white font-bold">{{ hero.title }}</h1>

        <!-- Dynamic description -->
        <p class="py-6 text-lg md:text-2xl text-white">{{ hero.description }}</p>

        <!-- Button (static content) -->
<!--        <button-->
<!--            class="btn bg-white border border-transparent rounded-3xl text-black hover:bg-[#E62D18] hover:text-white hover:border-red-600 text-left px-4 py-2 transition duration-300">-->
<!--          Download company Profile-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"-->
<!--               class="inline-block ml-2 fill-current">-->
<!--            <path-->
<!--                d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"/>-->
<!--          </svg>-->
<!--        </button>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}

.btn:hover .fill-current {
  fill: white; /* Change the SVG color on button hover */
}
</style>

