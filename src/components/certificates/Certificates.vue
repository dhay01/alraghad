<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase.js';
import Spinner from "@/components/Spinner.vue";

// Define reactive state for certificates and loading state
const certificates = ref([]);
const isLoading = ref(true);

// Fetch certificates data from Firestore
async function fetchCertificates() {
  try {
    const querySnapshot = await getDocs(collection(db, "certificates"));
    certificates.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching certificates: ", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchCertificates();
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="container min-h-screen mx-auto px-10 py-20">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner />
    </div>
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">certificates of appreciation</h1>
      <div v-for="certificate in certificates" :key="certificate.id" class="mt-2 mb-4 flex justify-center">
        <img :src="certificate.photo" width="1000" height="1000" class="rounded-box fixed-height" alt="certificate" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>