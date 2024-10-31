<script setup>
import {ref, onMounted} from 'vue';
import {db} from '../../includes/firebase.js';
import {doc, getDoc} from 'firebase/firestore';
import Spinner from "@/components/Spinner.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const id = route.params.id;

const certificate = ref(null);
const isLoading = ref(true);

async function fetchCertificate() {
  try {
    const docRef = doc(db, "certificates", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      certificate.value = docSnap.data();
    } else {
      console.error("No such document!");
    }
  } catch (error) {
    console.error("Error fetching certificate: ", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  window.scrollTo(0, 0);
  fetchCertificate();
  console.log("vvv")
});
</script>

<template>
  <div class="container min-h-screen mx-auto px-10 py-20">
    <div v-if="isLoading" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner/>
    </div>

    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">Certificate of Appreciation</h1>

      <div class="mt-2 mb-4 flex justify-center">
        <img :src="certificate.photo" alt="Certificate" width="1000" class="rounded-box fixed-height"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
