
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { db } from '../../includes/firebase';
import { doc, getDoc } from 'firebase/firestore';
import PhotoLibrary from '../project/PhotoLibrary.vue';
import Spinner from '../Spinner.vue';

const route = useRoute();
const projectId = route.params.id;
console.log("text");
const project = ref(null);
const isLoading = ref(true);


async function fetchProject() {
  try {
    const docRef = doc(db, 'relatedProjects', projectId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      project.value = { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error('No such document!');
    }
  } catch (error) {
    console.error('Error fetching project: ', error);
  } finally {
    isLoading.value = false;
  }
}
const descriptionParagraphs = computed(() => {
  return project.value?.description
      ? project.value.description.split(' - ') // Split on " - "
      : [];
});


onMounted(async () => {
  console.log("project id", projectId);
  window.scrollTo(0, 0);
  await fetchProject();
});
</script>


<template>
  <div class="container min-h-screen mx-auto px-4 py-20">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <Spinner />
    </div>

    <div v-else-if="project">
      <!-- Main Project Details -->
      <h1 class="text-4xl md:text-5xl font-bold py-6 text-black">
        {{ project.title || 'Untitled Project' }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Location Card -->
        <div class="flex items-center space-x-4 p-4 bg-gray-100 md:bg-white rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#422A86" width="25" height="25" viewBox="0 0 384 512">
            <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
          <div class="text-black">
            <h2 class="text-lg text-[#422A86] font-semibold">Location</h2>
            <p class="text-md text-[#422A86]">{{ project.location }}</p>
          </div>
        </div>

        <!-- Client Card -->
        <div class="flex items-center space-x-4 p-4 bg-gray-100 md:bg-white rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#422A86" viewBox="0 0 512 512">
            <path
                d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
            />
          </svg>
          <div class="text-black">
            <h2 class="text-lg text-[#422A86] font-semibold">Client</h2>
            <p class="text-md text-[#422A86]">{{ project.client }}</p>
          </div>
        </div>

        <!-- Date Card -->
        <div class="flex items-center space-x-4 p-4 bg-gray-100 md:bg-white rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#422A86" viewBox="0 0 448 512">
            <path
                d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"
            />
          </svg>
          <div class="text-black">
            <h2 class="text-lg text-[#422A86] font-semibold">Date</h2>
            <p class="text-md text-[#422A86]">{{ project.date }}</p>
          </div>
        </div>
      </div>

      <!-- Project Description -->
      <div class="mt-8">
        <div v-for="(paragraph, index) in descriptionParagraphs" :key="index">
          <p class="text-lg leading-relaxed max-w-[1150px] mx-auto text-justify px-2 md:px-5 text-gray-700">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <!-- Photo Library -->
      <PhotoLibrary :images="project.photos || []" />

      <!-- Virtual Tour -->
      <div v-if="project.virtualTour" class="w-full my-8 flex justify-center">
        <div class="matterport-tour" style="width: 100%; max-width: 1150px;">
          <iframe
              width="100%"
              height="600"
              style="border-radius: 20px;"
              :src="project.virtualTour"
              frameborder="0"
              allowfullscreen
              allow="xr-spatial-tracking; gyroscope; accelerometer"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Error message -->
    <div v-else>
      <p class="text-center text-gray-700">Project not found.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.card-body {
  height: 280px; /* Fixed height to accommodate title and details */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1rem;
}

.details {
  flex-grow: 1;
  margin-top: 1rem;
}

.skeleton {
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite;
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
</style>