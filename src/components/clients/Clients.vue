<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase';
import Spinner from "@/components/Spinner.vue";

const clients = ref([]);
const isLoading = ref(true);

// Fetch clients from Firestore
async function fetchClients() {
  try {
    const querySnapshot = await getDocs(collection(db, "clients"));
    clients.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  } catch (error) {
    console.error("Error fetching clients: ", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchClients();
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="container min-h-screen mx-auto px-10 py-20">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner />
    </div>

    <!-- Clients Section -->
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">Our Clients</h1>

      <div class="space-y-6">
        <div v-for="client in clients" :key="client.id" class="client-card flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-6 rounded-box bg-gray-50 transition-transform transform hover:scale-105">
          <!-- Client Logo -->
          <div class="logo-container w-56 h-56 md:w-32 md:h-32">
            <img :src="client.logo" alt="Client Logo" class="object-contain w-full h-full" />
          </div>

          <div class="text-black text-center md:text-left">
            <h2 class="text-xl md:text-2xl font-semibold">{{ client.name }}</h2>
<!--            <p class="mt-2 text-gray-700">{{ client.description }}</p>-->
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

.client-card {
  transition: background-color 0.3s, transform 0.3s;
}

.client-card:hover {
  transform: translateY(-5px);
}

.logo-container {
  transition: transform 0.3s;
}

/* Adjust logo size on smaller screens */
@media (max-width: 768px) {
  .logo-container {
    width: 50px; /* Adjust this size as needed */
    height: 50px; /* Adjust this size as needed */
  }

  .client-card {
    flex-direction: column; /* Stack logo on top of text */
    align-items: center;
  }
}
</style>
