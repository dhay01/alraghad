<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase';
import Spinner from "@/components/Spinner.vue";

const offers = ref([]);
const isLoading = ref(true);

// Fetch offers from Firestore
async function fetchOffers() {
  try {
    const querySnapshot = await getDocs(collection(db, "offers"));
    offers.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  } catch (error) {
    console.error("Error fetching offers: ", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchOffers();
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="container mx-auto px-10 py-20">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="text-center px-[48%] py-[20%]">
      <Spinner />
    </div>

    <!-- Offers Section -->
    <div v-else>
      <h1 class="text-5xl font-bold py-6 text-black">What We Offer</h1>

      <div class="space-y-6">
        <div v-for="offer in offers" :key="offer.id" :style="`background-color:${offer.bg}`" class="flex items-center space-x-6 p-6 rounded-box transition-transform transform hover:scale-105">
          <!-- Offer Icon -->
          <div class="w-24 h-24">
            <img :src="offer.icon" alt="Offer Icon" class="object-contain w-full h-full" />
          </div>

          <!-- Offer Info -->
          <div class="text-black">
            <h2 class="text-2xl  font-semibold">{{ offer.title }}</h2>
            <p class="mt-2">{{ offer.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.flex div {
  transition: background-color 0.3s, transform 0.3s;
}

.flex div:hover {
  transform: translateY(-5px);
}
</style>
