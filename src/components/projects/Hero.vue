<script setup>
import {ref, onMounted, computed} from 'vue';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../../includes/firebase';
import { useI18n } from 'vue-i18n';

const hero = ref({});
const isImageLoaded = ref(false);
const { locale } = useI18n();

async function fetchHero() {
  try {
    const q = query(collection(db, "hero"), where("page", "==", "projects"));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      hero.value = querySnapshot.docs[0].data();
    }
  } catch (error) {
    console.error("Error fetching hero: ", error);
  }
}

const heroTitle = computed(() => {
  if (locale.value === 'ar') return hero.value.title_ar || '';
  return hero.value.title_en || '';
});

const heroDescription = computed(() => {
  if (locale.value === 'ar') return hero.value.description_ar || '';
  return hero.value.description_en || '';
});

onMounted(() => {
  fetchHero();
});
</script>

<template>
  <div v-if="hero" class="hero rounded bg-base-200 min-h-[580px] max-h-96 relative bg-cover bg-center"
       :style="{ backgroundImage: `url(${hero.photo})` }">
    <div class="hero-content flex-col lg:flex-row items-start relative z-10" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
      <div :class="[locale === 'ar' ? 'text-right' : 'text-left']">
        <h1 :class="[{'text-black': !isImageLoaded, 'text-white': isImageLoaded}, 'text-3xl md:text-4xl font-bold', locale === 'ar' ? 'text-right' : 'text-left']">
          {{ heroTitle }}
        </h1>
        <div :class="[locale === 'ar' ? 'text-right' : 'text-left']">
          <p :class="[{'text-black': !isImageLoaded, 'text-white': isImageLoaded}, 'py-6 text-lg md:text-2xl', locale === 'ar' ? 'text-right' : 'text-left']">
            {{ heroDescription }}
          </p>
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
