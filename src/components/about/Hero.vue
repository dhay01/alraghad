<script setup>
import {ref, onMounted} from 'vue';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../../includes/firebase';

const hero = ref({});
const isImageLoaded = ref(false);

// Fetch data from the "hero" collection in Firestore with a filter for page="about"
async function fetchHero() {
  try {
    const q = query(collection(db, "hero"), where("page", "==", "about"));
    const querySnapshot = await getDocs(q);

    // If there's a matching document, set hero to its data
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
  <div v-if="hero" class="hero rounded bg-base-200 min-h-[580px] max-h-96 relative bg-cover bg-center"
       :style="{ backgroundImage: `url(${hero.photo})` }">
    <div class="hero-content flex-col lg:flex-row items-start">
      <div class="text-left">

        <h1 :class="{'text-black': !isImageLoaded, 'text-white': isImageLoaded}"
            class="text-3xl md:text-4xl font-bold">{{ hero.title }}</h1>
        <div class="text-left">
          <p :class="{'text-black': !isImageLoaded, 'text-white': isImageLoaded}"
                                  class="py-6 text-lg md:text-2xl">{{ hero.description }}</p>

        </div>

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
