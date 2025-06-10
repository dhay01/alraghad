<script setup>
import {ref, onMounted, computed} from 'vue';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../includes/firebase';
import { useI18n } from 'vue-i18n';

const hero = ref({});
const isImageLoaded = ref(false);  
const { locale } = useI18n();

const isRtl = computed(() => locale.value === 'ar');

async function fetchHero() {
  try {
    const querySnapshot = await getDocs(collection(db, "hero"));
    hero.value = querySnapshot.docs[0].data();
  } catch (error) {
    console.error("Error fetching hero: ", error);
  }
}

const heroDescription = computed(() => {
  if (locale.value === 'ar') return hero.value.description_ar || '';
  return hero.value.description_en || '';
});

const heroTitle = computed(() => {
  if (locale.value === 'ar') return hero.value.title_ar || '';
  return hero.value.title_en || '';
});

onMounted(() => {
  fetchHero();
});
</script>

<template>
  <div v-if="hero" class="hero rounded bg-base-200 min-h-[580px] max-h-96 relative bg-cover bg-center"
       :style="{ backgroundImage: `url(${hero.photo})` }">

  
    <div class="hero-content flex-col lg:flex-row relative z-10 px-4 md:px-10" :dir="isRtl ? 'rtl' : 'ltr'">
      <div :class="[isRtl ? 'text-right' : 'text-left']">
        <!-- Dynamic title with conditional text color -->
        <h1 :class="[{'text-black': !isImageLoaded, 'text-white': isImageLoaded}, 'text-3xl md:text-4xl font-bold', isRtl ? 'text-right' : 'text-left']">
            {{ heroTitle }}
        </h1>

        <p :class="[{'text-black': !isImageLoaded, 'text-white': isImageLoaded}, 'py-6 text-lg md:text-2xl', isRtl ? 'text-right' : 'text-left']">
           {{ heroDescription }}
        </p>

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
