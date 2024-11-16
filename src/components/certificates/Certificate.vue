<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../includes/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const certificate = ref({
  photo: null,
  isLoading: true // Add isLoading property for skeleton loading
});
const isLoadingPage = ref(true);

async function fetchCertificate() {
  try {
    const docRef = doc(db, "certificates", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      certificate.value = {
        ...docSnap.data(),
        isLoading: true // Keep skeleton loading until the image loads
      };
    } else {
      console.error("No such document!");
    }
  } catch (error) {
    console.error("Error fetching certificate: ", error);
  } finally {
    isLoadingPage.value = false;
  }
}

function handleImageLoad() {
  certificate.value.isLoading = false;
}

onMounted(() => {
  window.scrollTo(0, 0);
  fetchCertificate();
});
</script>

<template>
  <div class="container min-h-screen mx-auto px-10 py-20">
    <!-- Page Spinner -->
    <div v-if="isLoadingPage" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner />
    </div>

    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">Certificate of Appreciation</h1>

      <div class="mt-2 mb-4 flex justify-center relative w-full max-w-screen-lg mx-auto">
        <!-- Skeleton loader -->
        <div
            v-if="certificate.isLoading"
            class="skeleton-loader w-full h-[500px] md:h-[700px] rounded-box"
        ></div>

        <!-- Lazy-loaded image -->
        <img
            v-show="!certificate.isLoading"
            :src="certificate.photo"
            alt="Certificate"
            @load="handleImageLoad"
            class="rounded-box w-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.skeleton-loader {
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite;
  height: 100%;
  width: 100%;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

img {
  transition: opacity 0.3s ease;
}

img[style="display: none;"] {
  opacity: 0;
}
</style>
