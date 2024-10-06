<!--<script setup>-->
<!--import {ref, onMounted} from 'vue';-->
<!--import {defineProps} from 'vue';-->
<!--import {db} from '../../includes/firebase';-->
<!--import {collection, getDocs} from 'firebase/firestore';-->
<!--import Spinner from "@/components/Spinner.vue";-->
<!--import Viewjob from "@/components/jobs/Viewjob.vue";-->

<!--const props = defineProps({-->
<!--    id: {-->
<!--        type: String,-->
<!--        required: true-->
<!--    }-->
<!--});-->
<!--const data = ref([]);-->
<!--const isLoading = ref(true);-->

<!--async function fetchData() {-->
<!--  try {-->
<!--    const querySnapshot = await getDocs(collection(db, "jobs"));-->
<!--    data.value = querySnapshot.docs.map(doc => ({-->
<!--      id: doc.id,-->
<!--      ...doc.data()-->
<!--    }));-->

<!--  } catch (error) {-->
<!--    console.error("Error fetching data: ", error);-->
<!--  } finally {-->
<!--    isLoading.value = false;-->
<!--  }-->
<!--}-->
<!--onMounted(() => {-->

<!--  window.scrollTo(0, 0);-->
<!--  fetchData();-->
<!--});-->

<!--</script>-->


<!--<template>-->
<!--  <div class="container mx-auto px-10 py-20">-->
<!--    &lt;!&ndash; Loading Spinner &ndash;&gt;-->
<!--    <div v-if="isLoading" class="text-center px-[48%] py-[20%]">-->
<!--      <p>-->
<!--        <Spinner/>-->
<!--      </p>-->
<!--    </div>-->

<!--    &lt;!&ndash; Content after data is fetched &ndash;&gt;-->
<!--    <div v-else>-->

<!--      &lt;!&ndash; Page Title &ndash;&gt;-->
<!--      <h1 class="text-5xl font-bold py-6 text-black">Why join us</h1>-->

<!--      &lt;!&ndash; Description &ndash;&gt;-->




<!--      &lt;!&ndash; Open Positions Section &ndash;&gt;-->
<!--      <div class="">-->
<!--        <h2 class="text-3xl font-bold py-6 text-[#422A86]">Open Positions</h2>-->

<!--        &lt;!&ndash; Loop through jobs data &ndash;&gt;-->
<!--        <div v-for="item in data" :key="item.id" class="w-full mb-4">-->
<!--          <ul>-->
<!--            <li v-if="item.title" class="text-lg text-gray-700 mb-3">-->
<!--              <br/>-->
<!--              <a :href="item.linkedinLink" target="_blank" class="text-[#422A86] mr-2 underline">{{ item.title }}</a>-<span class="ml-2">{{ item.location }}</span>-->
<!--              <Viewjob :item="item" />-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<!--<style scoped>-->

<!--</style>-->
<script setup>
import {ref, onMounted} from 'vue';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../includes/firebase';
import Spinner from "@/components/Spinner.vue";
import ViewJob from "@/components/jobs/ViewJob.vue";

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
      <Spinner />
    </div>
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">why join us?</h1>
      <div class="mt-2 mb-4">
        <p class="md:text-lg text-md leading-relaxed text-justify  text-gray-700">
          Al-Raghad International Group specializes in comprehensive electrical and mechanical services at Al Baraka
          Mall
          (MEP), encompassing: - HVAC (Heating, Ventilation, and Air Conditioning) - Fire Fighting System - Domestic
          Water System - Design and implementation of all electrical boards (LV Panel Boards, Motor Control Center) -
          Internal & External Lighting - Network-Telephone-Television System - Fire Alarm and Detection System -
          Building
          Automation System.
        </p>

      </div>
      <hr class="w-36"/>
      <h1 class="text-3xl font-bold py-6 text-black">open positions</h1>
      <div v-for="job in jobs" :key="job.id" class="mb-8">
        <h2 @click="openModal(job)" class="text-2xl underline cursor-pointer text-[#422A86] font-bold">
          {{job.title }}
        </h2>
        <p class="text-gray-700">{{ job.location }}</p>
      </div>
    </div>

    <!-- Include the Job Modal component and pass the selected job as prop -->
    <ViewJob :item="selectedJob"/>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
