<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase.js';
import Spinner from "@/components/Spinner.vue";

// Define reactive state for certificates and loading
const certificates = ref([]);
const isLoading = ref(true);

// Fetch all certificates from Firestore
async function fetchCertificates() {
  try {
    const querySnapshot = await getDocs(collection(db, "certificates"));
    certificates.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() // Spread the document data into the certificate object
    }));
  } catch (error) {
    console.error("Error fetching certificates: ", error);
  } finally {
    isLoading.value = false; // Set loading to false after fetching
  }
}

// Fetch the certificates when the component is mounted
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

    <!-- Display certificates if data is available -->
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">Certificates of Appreciation</h1>
      <div v-if="certificates.length" class="mt-2 mb-4">
        <div v-for="certificate in certificates" :key="certificate.id" class="flex justify-center">
          <img :src="certificate.photo" alt="Certificate" width="1000" class="rounded-box fixed-height" />
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-500">No certificates found</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  max-width: 1200px;
}
</style>

