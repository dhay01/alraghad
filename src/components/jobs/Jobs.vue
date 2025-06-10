<script setup>
import {ref, onMounted} from 'vue';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../includes/firebase';
import Spinner from "@/components/Spinner.vue";
import ViewJob from "@/components/jobs/ViewJob.vue";
import empty from "@/assets/empty.jpg";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Define reactive state for jobs and loading state
const jobs = ref([]);
const isLoading = ref(true);
const selectedJob = ref(null); // Track the currently selected job for the modal

// Fetch jobs data from Firestore
async function fetchJobs() {
  try {
    const querySnapshot = await getDocs(collection(db, "jobs"));
    jobs.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching jobs: ", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchJobs();
  window.scrollTo(0, 0);
});

// Method to open modal with selected job
function openModal(job) {
  selectedJob.value = job;
  const modal = document.getElementById("job_modal");
  if (modal) modal.showModal();
}
</script>

<template>
  <div class="container min-h-screen mx-auto px-10 py-20">

    <!-- Loading Spinner -->
    <div v-if="isLoading" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner/>
    </div>
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">{{ t('jobs.title') }}</h1>
      <div class="mt-2 mb-4">
        <p class="md:text-lg text-md leading-relaxed text-justify  text-gray-700">
          {{ t('jobs.description') }}
        </p>

      </div>

      <h1 class="text-3xl font-bold py-6 text-black">{{ t('jobs.openPositions') }}</h1>
      <div v-for="job in jobs" :key="job.id" class="mb-8">
        <h2 @click="openModal(job)" class="text-2xl underline cursor-pointer text-[#422A86] font-bold">
          {{ job.title }}
        </h2>
        <p class="text-gray-700">{{ job.location }}</p>
      </div>
    </div>
    <div v-if="!jobs.length">
      <div class="text-center">
        <img :src="empty" alt="No Projects" class="object-contain mx-auto w-72 h-72 md:w-96 md:h-96"/>
        <p class="text-xl text-gray-400">{{ t('jobs.noPositions') }}</p>
      </div>
    </div>

    <ViewJob :item="selectedJob"/>
  </div>

</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
