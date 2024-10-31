<script setup>
import {db} from '../../includes/firebase.js';
import {collection, getDocs} from 'firebase/firestore';
import {ref, onMounted} from 'vue';
import {RouterLink} from "vue-router";

const data = ref([]);

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
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">What We Do</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="item in data" :key="item.title">
        <div class="card w-full h-full min-h-[250px] lg:min-h-[200px]" :style="`background-color:${item.bg}`">
          <div class="card-body flex flex-col justify-between">
            <RouterLink to="/what-we-offer">
              <img :src="item.icon" alt="Icon" width="60" class="mb-4"/>
              <div class="text-black">
                <h1 class="text-lg py-2">{{ item.title }}</h1>
                <p class="text-sm">{{ item.description }}</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
