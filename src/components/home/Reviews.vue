<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const certificates = ref([]);

// Fetch certificates from Firestore
async function fetchCertificates() {
  try {
    const querySnapshot = await getDocs(collection(db, "certificates"));
    certificates.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() // Spread the document data into the certificate object
    }));
  } catch (error) {
    console.error("Error fetching certificates: ", error);
  }
}

// Navigate to the specific certificate page by ID
function navigateToCertificate(certificateId) {
  router.push({ name: 'certificate', params: { id: certificateId } });
}


// Fetch certificates on component mount
onMounted(fetchCertificates);
</script>


<template>
  <div class="px-5 sm:px-10 md:px-20 py-10">
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">What Our Clients Say About Us</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Loop through certificates -->
      <div
          v-for="certificate in certificates"
          :key="certificate.id"
          class="card w-full h-full min-h-[300px] bg-gray-50 rounded-lg duration-300"
      >
        <div class="card-body flex flex-col justify-between items-center p-6">
          <!-- Logo/Image on top -->
          <img
              :src="certificate.logo"
              alt="Certificate Logo"
              class="w-32 h-32 object-cover mb-4"
          />

          <!-- Small paragraph for the review -->
          <p class="text-gray-600 text-center mb-4">
            {{ certificate.review }}
          </p>

          <!-- Button that navigates to the certificate page -->
          <button
              @click="navigateToCertificate(certificate.id)"
              class="cursor-pointer btn w-full hover:bg-[#E62D18] bg-white text-black border-black hover:text-white hover:border-none rounded-3xl"
          >
            View Certificate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background-color: #f5f5f5;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background-color: #E62D18;
  color: #fff;
}
</style>



<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background-color: #f5f5f5; /* Light gray background for all cards */
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background-color: #E62D18;
  color: #fff;
}
</style>

