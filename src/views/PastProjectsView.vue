<script setup>
import { ref, onMounted } from 'vue';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../includes/firebase.js';

const hero = ref({});
const isImageLoaded = ref(false);


const projects = [
  { name: "Al Amwaj Hotel", start: "1986", end: "1988" },
  { name: "Al Nakheel Hotel", start: "1990", end: "1991" },
  { name: "Bank of Baghdad", start: "1990", end: "1991" },
  { name: "Basra Petrochemical", start: "1992", end: "1993" },
  { name: "Al Yacht Restaurant", start: "1993", end: "1993" },
  { name: "Ibn Al Haytham Hospital", start: "1993", end: "1994" },
  { name: "Babylon Hospital", start: "1995", end: "1995" },
  { name: "The Industrial Bank", start: "1996", end: "1997" },
  { name: "Olympic Swimming Pool", start: "1998", end: "1998" },
  { name: "Abu Ghraib irrigation", start: "1999", end: "1999" },
  { name: "Al Razi Hospital", start: "2000", end: "2000" },
  { name: "Al Shaab Indoor Swimming Pool", start: "2001", end: "2001" },
  { name: "Baghdad Mall", start: "2002", end: "2002" },
  { name: "Dijlah University College", start: "2003", end: "2004" },
  { name: "Medical City Hospital Expansion", start: "2005", end: "2006" },
  { name: "Al Zawraa Park Rehabilitation", start: "2007", end: "2008" },
  { name: "Baghdad National Library", start: "2009", end: "2010" },
  { name: "Al Mutanabbi Cultural Center", start: "2011", end: "2011" },
  { name: "Al Mansour Residential Complex", start: "2012", end: "2013" },
  { name: "Basra International Airport Renovation", start: "2014", end: "2015" },
  { name: "Mosul University Reconstruction", start: "2016", end: "2017" },
  { name: "Al Rashid Theatre Restoration", start: "2018", end: "2018" },
  { name: "Baghdad Sports City", start: "2019", end: "2020" },
  { name: "Central Bank of Iraq Headquarters", start: "2021", end: "2022" },
  { name: "Baghdad Green Belt Initiative", start: "2023", end: "2023" }
];


// Fetch hero section data
async function fetchHero() {
  try {
    const q = query(collection(db, "hero"), where("page", "==", "all"));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      hero.value = querySnapshot.docs[0].data();
    }
  } catch (error) {
    console.error("Error fetching hero: ", error);
  }
}

onMounted(() => {
  fetchHero();
});
</script>


<template>
  <!-- Hero Section -->
  <div
      v-if="hero"
      class="hero rounded bg-base-200 min-h-[580px] max-h-96 relative bg-cover bg-center"
      :style="{ backgroundImage: `url(${hero.photo})` }"
  >
    <div class="hero-content flex-col lg:flex-row items-start">
      <div class="text-left">
        <h1
            :class="{ 'text-black': !isImageLoaded, 'text-white': isImageLoaded }"
            class="text-3xl md:text-4xl font-bold"
        >
          {{ hero.title }}
        </h1>
        <div class="text-left">
          <p
              :class="{ 'text-black': !isImageLoaded, 'text-white': isImageLoaded }"
              class="py-6 text-lg md:text-2xl"
          >
            {{ hero.description }}
          </p>
        </div>
        <img v-if="hero.photo" :src="hero.photo" @load="isImageLoaded = true" class="hidden" />
      </div>
    </div>
  </div>

  <!-- Projects Section -->
  <div class="px-5 sm:px-10 md:px-20 py-10 mx-auto">
    <ul>
      <li v-for="project in projects" :key="project.name">
        {{ project.name }} ({{ project.start }} - {{ project.end }})
      </li>
    </ul>
  </div>
</template>



<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}
li {
  list-style: circle;
  padding: 10px;
}
</style>

