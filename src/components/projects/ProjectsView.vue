<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../includes/firebase';
import Spinner from "@/components/Spinner.vue";
import empty from "@/assets/empty.png";

const categories = ['MEP', 'AC',  'Lifts', 'Pumps', 'Water', 'Ventilation'];
const selectedCategory = ref(categories[0]);
const filteredProjects = ref([]);
const isLoading = ref(true);
const router = useRouter();

async function fetchProjectsByCategory(category) {
  selectedCategory.value = category;
  isLoading.value = true;
  try {
    const q = query(
        collection(db, "projects"),
        where("scopeOfWork", "array-contains", category)
    );
    const querySnapshot = await getDocs(q);
    filteredProjects.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching projects by category: ", error);
  } finally {
    isLoading.value = false;
  }
}

function navigateToProject(projectId) {
  router.push({ name: 'project-details', params: { id: projectId } });
}

onMounted(() => {
  fetchProjectsByCategory(categories[0]);
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="container min-h-screen mx-auto px-5 sm:px-10 py-20">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner />
    </div>
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">Discover More of AL-Raghad Projects</h1>

      <!-- Categories Buttons -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-6">
        <div v-for="category in categories" :key="category">
          <button
              class="btn bg-white rounded-3xl text-black hover:bg-primaryBlue hover:text-white text-left px-4 sm:px-8 w-full"
              :class="{ 'bg-primaryBlue text-white': selectedCategory === category }"
              @click="fetchProjectsByCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Filtered Projects Display -->
      <div class="space-y-6">
        <div v-for="project in filteredProjects" :key="project.id" class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 p-6 rounded-box bg-gray-50 transition-transform transform hover:scale-105">

          <!-- Project Info -->
          <div class="text-black w-full md:w-2/3">
            <h2 class="text-xl md:text-2xl font-semibold">{{ project.title }} - {{ project.location }}</h2>
            <div class="mt-4">
              <button @click="navigateToProject(project.id)" class="btn hover:bg-[#E62D18] bg-white text-black border-black hover:text-white hover:border-none rounded-3xl">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!filteredProjects.length">
        <div class="text-center">
          <img :src="empty" alt="No Projects" class="object-contain mx-auto w-72 h-72 md:w-96 md:h-96" />
          <p class="text-xl text-gray-400">No projects found for "{{ selectedCategory }}"</p>
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
  cursor: pointer;
}

.bg-primaryBlue {
  background-color: #422A86;
}
</style>
