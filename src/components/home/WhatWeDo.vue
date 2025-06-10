<script setup>
import { db } from '../../includes/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from "vue-router";

const data = ref([]);
const { locale } = useI18n();
const isRtl = computed(() => locale.value === 'ar');

async function fetchData() {
  try {
    const querySnapshot = await getDocs(collection(db, "offers"));
    data.value = querySnapshot.docs.map(doc => doc.data()).sort((a, b) => a.no - b.no);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

onMounted(fetchData);
</script>

<template>
  <div class="px-5 sm:px-10 md:px-20 py-10">
    <h1 :class="[isRtl ? 'text-right' : 'text-left', 'text-3xl md:text-5xl py-10 text-black']">
      {{ isRtl ? ' خدماتنا' : 'What We Do' }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
          v-for="item in data"
          :key="item.title_en + item.title_ar"
          class="card w-full h-full min-h-[250px] lg:min-h-[200px] transition-transform transform hover:scale-105 hover:shadow-lg"
          :style="`background-color:${item.bg}`"
      >
        <div class="card-body flex flex-col justify-between p-4" :dir="isRtl ? 'rtl' : 'ltr'">
          <RouterLink to="/what-we-offer">
            <img
                :src="item.icon"
                alt="Icon"
                width="60"
                class="mb-4 transition-transform transform hover:rotate-6"
            />
            <div class="text-black">
              <h1 :class="[isRtl ? 'text-right' : 'text-left', 'text-lg py-2']">
                {{ isRtl ? item.title_ar : item.title_en }}
              </h1>
              <p :class="[isRtl ? 'text-right' : 'text-left', 'text-sm']">
                {{ isRtl ? item.description_ar : item.description_en }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add smooth animations */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.card img {
  transition: transform 0.3s ease;
}

.card img:hover {
  transform: scale(1.1);
}
</style>
