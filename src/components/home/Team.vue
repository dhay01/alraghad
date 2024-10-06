<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../includes/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const team = ref([]);

async function fetchTeam() {
  try {
    const querySnapshot = await getDocs(collection(db, "team"));
    team.value = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .reverse(); // Reverse the array
  } catch (error) {
    console.error("Error fetching team members: ", error);
  }
}

onMounted(fetchTeam);
</script>

<template>
  <div class="px-5 md:px-20 py-10">
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">Meet our team</h1>

    <div class="carousel carousel-center rounded-box max-w-full space-x-4 md:space-x-10 p-4">
      <div v-for="member in team" :key="member.id" class="carousel-item">
        <div class="team-member h-[200px] w-[150px] md:h-[350px] md:w-[250px] rounded-2xl relative overflow-hidden"
             :style="{ backgroundImage: `url(${member.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
          <div class="gradient-overlay"></div>
          <h1 class="text-xl md:text-3xl pt-28 md:pt-60 px-4 text-white">{{ member.name }}</h1>
          <p class="py-2 px-4 text-sm md:text-xl text-white">{{ member.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  flex: 0 0 auto;
}

.team-member {
  position: relative;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  z-index: 1; /* Ensure overlay is above the background image */
}

h1, p {
  position: relative; /* Ensure text is above the gradient overlay */
  z-index: 2;
}

@media (max-width: 768px) {
  .carousel-item {
    width: 150px;
    height: 200px;
  }

  p {
    font-size: 0.875rem;
  }
}
</style>
