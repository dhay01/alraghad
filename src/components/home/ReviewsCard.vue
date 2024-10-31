<script setup>
import {defineProps} from 'vue';
import {useRouter} from 'vue-router';
import {onMounted} from 'vue';

const props = defineProps({
  certificate: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

function navigateToCertificate() {
  router.push({name: 'certificate', params: {id: props.certificate.id}});
}

onMounted(() => {
  console.log("certificate")
})
</script>

<template>
  <div class="card-body flex flex-col justify-between items-center p-6">
    <img
        :src="certificate.logo"
        alt="Certificate Logo"
        class=" h-24 object-cover mb-4"
    />
    <h1 class="text-2xl text-black" >{{ certificate.title }}</h1>
    <button
        @click="navigateToCertificate"
        class="cursor-pointer btn w-full hover:bg-[#E62D18] bg-white text-black border-black hover:text-white hover:border-none rounded-3xl"
    >
      View Certificate
    </button>
  </div>
</template>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background-color: #f5f5f5;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background-color: #E62D18;
  color: #fff;
}
</style>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background-color: #f5f5f5; /* Light gray background for all cards */
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background-color: #E62D18;
  color: #fff;
}
</style>

