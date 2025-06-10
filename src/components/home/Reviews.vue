<script setup>
import { ref, onMounted, computed } from 'vue';
import { db } from '@/includes/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from 'primevue/carousel';
import reviewsCard from './ReviewsCard.vue';
import { useI18n } from 'vue-i18n';




const certificates = ref([]);
const responsiveOptions = ref([
  { breakpoint: '1600px', numVisible: 3, numScroll: 1 },
  { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
  { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
  { breakpoint: '767px', numVisible: 2, numScroll: 1 },
  { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);

async function fetchCertificates() {
  try {
    const querySnapshot = await getDocs(collection(db, "certificates"));
    certificates.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching certificates: ", error);
  }
}
const { t, locale } = useI18n();
const isRtl = computed(() => locale.value === 'ar');
onMounted(async () => {
  await fetchCertificates();
});
</script>

<template>
  <div class="px-5 sm:px-10 md:px-20 py-10" >
    <div >
<h1 :dir="isRtl ? 'rtl' : 'ltr'" class=" text-3xl md:text-5xl py-10 text-black">{{ t('reviewCertificatesCards.title') }}</h1>
    
    </div>
    <div class="flex justify-center">
      <Carousel dir="ltr" class="w-full" :value="certificates" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="certificate-item mr-4 relative">
            <reviewsCard :certificate="slotProps.data" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.certificate-item {
  margin-left: 1rem;
}
</style>