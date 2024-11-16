<script setup>
import {ref, onMounted} from 'vue';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../includes/firebase';

const hero = ref({});
const isImageLoaded = ref(false);  // Loading state for the image

// Fetch data from the "hero" collection in Firestore
async function fetchHero() {
  try {
    const querySnapshot = await getDocs(collection(db, "hero"));
    hero.value = querySnapshot.docs[0].data();
  } catch (error) {
    console.error("Error fetching hero: ", error);
  }
}

// Run fetchHero on component mount
onMounted(() => {
  fetchHero();
});
</script>

<template>
  <div v-if="hero" class="hero rounded bg-base-200 min-h-[580px] max-h-96 relative bg-cover bg-center"
       :style="{ backgroundImage: `url(${hero.photo})` }">
    <div class="hero-content flex-col lg:flex-row">
      <div class="text-left">
        <!-- Dynamic title with conditional text color -->
        <h1 :class="{'text-black': !isImageLoaded, 'text-white': isImageLoaded}"
            class="text-3xl md:text-4xl font-bold">{{ hero.title }}</h1>

        <p :class="{'text-black': !isImageLoaded, 'text-white': isImageLoaded}"
           class="py-6 text-lg md:text-2xl">{{ hero.description }}</p>


        <img v-if="hero.photo" :src="hero.photo" @load="isImageLoaded = true" class="hidden"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}
</style>
