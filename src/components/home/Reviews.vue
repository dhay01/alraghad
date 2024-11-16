<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/includes/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from 'primevue/carousel';
import reviewsCard from './ReviewsCard.vue';

const certificates = ref([]);
const responsiveOptions = ref([
  { breakpoint: '1600px', numVisible: 3, numScroll: 1 },
  { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
  { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
  { breakpoint: '767px', numVisible: 2, numScroll: 1 },
  { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);

async function fetchCertificates() {
  try {
    const querySnapshot = await getDocs(collection(db, "certificates"));
    certificates.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching certificates: ", error);
  }
}

onMounted(async () => {
  await fetchCertificates();
});
</script>

<template>
  <div class="px-5 sm:px-10 md:px-20 py-10">
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">What Our Clients Say About Us</h1>
    <div class="flex justify-center">
      <!-- Carousel container with full width for proper centering -->
      <Carousel class="w-full" :value="certificates" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="certificate-item ml-4 relative">
            <reviewsCard :certificate="slotProps.data" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.certificate-item {
  margin-right: 1rem;
}
</style>
