<template>
  <div class="px-5 md:px-20 py-10">
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">Our Partners</h1>
    <div class="logos">
      <Marquee :speed="50" direction="left" :pauseOnHover="true">
        <!-- Loop through the fetched logos and display them -->
        <img
            v-for="(logo, index) in partners"
            :key="index"
            :src="logo"
            alt="logo"
            class="logo"
        />
      </Marquee>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase'; // Ensure this path is correct
import { Marquee } from '@selemondev/vue3-marquee';
import '@selemondev/vue3-marquee/dist/style.css';

// Store partners logos
const partners = ref([]);

// Fetch logos from Firestore
async function fetchLogos() {
  try {
    const querySnapshot = await getDocs(collection(db, 'partners'));
    partners.value = querySnapshot.docs.map(doc => doc.data().logo); // Fetch 'logo' field
  } catch (error) {
    console.error('Error fetching logos:', error);
  }
}

// Fetch logos on component mount
onMounted(fetchLogos);
</script>

<style scoped>
.logos {
  overflow: hidden;
  white-space: nowrap;
  background: white;
}

.logo {
  height: 70px;
  margin: 0 20px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.logo:hover {
  filter: grayscale(0%);
}
</style>
