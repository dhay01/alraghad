<script setup>
import { ref, onMounted } from 'vue';
import projectCard from './ProjectCard.vue';
import { db } from '../../includes/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const projects = ref([]);

async function fetchProjects() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    projects.value = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(project => project.featured === true); // Filter only featured projects
  } catch (error) {
    console.error("Error fetching projects: ", error);
  }
}

onMounted(fetchProjects);
</script>

<template>
  <div class="px-5 md:px-20 py-10">
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">Featured Projects</h1>
    <div class="carousel carousel-center rounded-box max-w-full space-x-4 md:space-x-10 p-4">
      <div
          v-for="project in projects"
          :key="project.id"
          class="carousel-item w-full md:w-auto"
      >
        <projectCard :project="project" />
      </div>
    </div>
  </div>
</template>
