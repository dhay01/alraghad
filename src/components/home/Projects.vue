<script setup>
import { ref, onMounted, computed } from 'vue';
import { db } from '../../includes/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from 'primevue/carousel';
import projectCard from './ProjectCard.vue';
import { useI18n } from 'vue-i18n';

const projects = ref([]);
const responsiveOptions = ref([
  { breakpoint: '1600px', numVisible: 3, numScroll: 1 },
  { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
  { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
  { breakpoint: '767px', numVisible: 2, numScroll: 1 },
  { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);

const { t, locale } = useI18n();
const isRtl = computed(() => locale.value === 'ar');

onMounted(async () => {
  async function fetchProjects() {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      projects.value = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter(project => project.featured === true)
          .sort((a, b) => a.no - b.no);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    }
  }
  await fetchProjects();
});
</script>


<template>
  <!-- Projects Hero Section -->
  <div class="mb-10 px-4 md:px-10" :dir="isRtl ? 'rtl' : 'ltr'">
    <h1 :class="[isRtl ? 'text-right' : 'text-left', 'text-3xl md:text-5xl py-10 font-bold']">
      {{ t('home.projects.title') }}
    </h1>
    <!-- You can add a description here if needed -->
  </div>

  <!-- Carousel Section -->
  <div class="px-5 md:px-20 py-10" :dir="isRtl ? 'rtl' : 'ltr'">
    <div class="flex justify-center">
      <!-- Carousel container with full width for proper centering -->
      <Carousel dir="ltr" class="w-full" :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="project-item ml-4 relative">
            <projectCard :project="slotProps.data" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>
