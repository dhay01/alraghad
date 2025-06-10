<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../includes/firebase';
import Spinner from "@/components/Spinner.vue";
import empty from "@/assets/empty.png";
import Hero from "@/components/projects/Hero.vue"
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const categories = ['MEP', 'Civil',  'Investment'];
const selectedCategory = ref(categories[0]);
const filteredProjects = ref([]);
const isLoading = ref(true);
const router = useRouter();

function getLocalized(field, project) {
  if (locale.value === 'ar' && project[field + '_ar']) return project[field + '_ar'];
  if (locale.value === 'en' && project[field + '_en']) return project[field + '_en'];
  return project[field] || t('projectCard.notAvailable');
}

const isRTL = computed(() => locale.value === 'ar');

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
  <Hero/>
  <div class="container min-h-screen mx-auto px-5 sm:px-10 py-20" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner />
    </div>
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black" :class="isRTL ? 'text-right' : 'text-left'">
        {{ t('home.projects.title') }}
      </h1>

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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="project in filteredProjects" :key="project.id" class="card w-full p-3 bg-gray-50 rounded-box transition-transform transform hover:scale-105">
          <figure class="relative">
            <div v-if="isLoading" class="skeleton w-full h-80 rounded-3xl p-2"></div>
            <img
                v-show="!isLoading"
                @load="handleImageLoad"
                class="rounded-3xl w-full h-64 object-cover"
                :src="project.photo || '/src/assets/DSC07785.jpg'"
                alt="header"
                @error="isLoading = false"
            />
          </figure>
          <div class="card-body text-black">
            <h2 class="card-title break-words whitespace-normal">{{ getLocalized('title', project) }}</h2>
            <div class="grid grid-cols-2 gap-x-2 gap-y-1 md:gap-x-8 md:gap-y-2">
              <p class="text-sm font-semibold break-words whitespace-normal">{{ t('projectCard.location') }}:</p>
              <p class="text-sm break-words whitespace-normal">{{ getLocalized('location', project) }}</p>
              <p class="text-sm font-semibold break-words whitespace-normal">{{ t('projectCard.client') }}:</p>
              <p class="text-sm break-words whitespace-normal">{{ getLocalized('client', project) }}</p>
              <p class="text-sm font-semibold break-words whitespace-normal">{{ t('projectCard.startingDate') }}:</p>
              <p class="text-sm break-words whitespace-normal">{{ project.date || t('projectCard.notAvailable') }}</p>
            </div>
            <div class="card-actions py-3 w-full justify-end">
              <button
                  @click="navigateToProject(project.id)"
                  class="btn w-full hover:bg-[#E62D18] bg-white text-black border-black hover:text-white hover:border-none rounded-3xl"
              >
                {{ t('projectCard.readMore') }}
                <svg
                    width="20"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    :class="isRTL ? 'rotate-180' : ''"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5 27.5C22.4036 27.5 28 21.9036 28 15C28 8.09644 22.4036 2.5 15.5 2.5C8.59644 2.5 3 8.09644 3 15C3 21.9036 8.59644 27.5 15.5 27.5ZM12.6875 11.25C12.6875 10.7322 13.1072 10.3125 13.625 10.3125H19.25C19.7678 10.3125 20.1875 10.7322 20.1875 11.25V16.875C20.1875 17.3928 19.7678 17.8125 19.25 17.8125C18.7322 17.8125 18.3125 17.3928 18.3125 16.875V13.5133L12.4129 19.4129C12.0468 19.779 11.4532 19.779 11.0871 19.4129C10.721 19.0468 10.721 18.4532 11.0871 18.0871L16.9867 12.1875H13.625C13.1072 12.1875 12.6875 11.7678 12.6875 11.25Z"
                      fill="#202020"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!filteredProjects.length">
        <div class="text-center">
          <img :src="empty" alt="No Projects" class="object-contain mx-auto w-72 h-72 md:w-96 md:h-96" />
          <p class="text-xl text-gray-400">{{ t('projects.noProjectsFound') }} "{{ selectedCategory }}"</p>
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
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  min-height: 2.5rem; /* Adjust this to ensure titles align */
  display: flex;
  align-items: center; /* Centers the text vertically if shorter */
}
.card-actions {
  margin-top: auto; /* Pushes actions to the bottom */
}
</style>
