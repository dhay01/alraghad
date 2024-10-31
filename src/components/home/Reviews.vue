<script setup>
import {ref, onMounted} from 'vue';
import reviewsCard from './ReviewsCard.vue';
import {db} from '@/includes/firebase.js';
import {collection, getDocs} from 'firebase/firestore';

const certificates = ref([]);

async function fetchCertificates() {
  try {
    const querySnapshot = await getDocs(collection(db, "certificates"));
    console.log(querySnapshot)
    certificates.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),

        })
    );

  } catch (error) {
    console.error("Error fetching certificates: ", error);
  }
}


onMounted( async ()=>
{
 await fetchCertificates();
 console.log('list',certificates.value)
})
</script>

<template>
  <div class="px-5 sm:px-10 md:px-20 py-10">
    <h1 class="text-left text-3xl md:text-5xl py-10 text-black">What Our Clients Say About Us</h1>
    <div class="carousel carousel-center rounded-box max-w-full space-x-4 md:space-x-10 p-4">
<!--    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">-->
      <div v-for="certificate in certificates" class=" carousel-item w-96 md:w-80 card  h-full min-h-[300px] bg-gray-50 rounded-lg duration-300
      " :key="certificate.id">


        <reviewsCard :certificate="certificate"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

