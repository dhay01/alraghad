<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../includes/firebase';
import Spinner from "@/components/Spinner.vue";
import { useI18n } from 'vue-i18n';

const clients = ref([]);
const isLoading = ref(true);
const { t } = useI18n();

// Fetch clients from Firestore
async function fetchClients() {
  try {
    const querySnapshot = await getDocs(collection(db, "clients"));
    clients.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  } catch (error) {
    console.error("Error fetching clients: ", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchClients();
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="container min-h-screen mx-auto px-10 py-20">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="text-center md:px-[48%] px-[40%] py-[10%] md:py-[20%]">
      <Spinner />
    </div>

    <!-- Clients Section -->
    <div v-else>
      <h1 class="text-3xl md:text-5xl font-bold py-6 text-black">{{ t('clients.title') }}</h1>

      <div class="space-y-6">
        <div
          v-for="client in clients"
          :key="client.id"
          class="client-card flex flex-col md:flex-row items-center md:justify-start space-y-4 md:space-y-0 md:gap-x-6 p-6 rounded-box bg-gray-50 transition-transform transform hover:scale-105"
          :dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'"
        >
          <!-- Client Logo -->
          <div class="logo-container w-32 h-32">
            <img :src="client.logo" alt="Client Logo" class="object-contain w-full h-full" />
          </div>
          <!-- Text -->
          <div class="text-black text-xl md:text-2xl font-semibold" :class="$i18n && $i18n.locale === 'ar' ? 'text-right' : 'text-left'">
            {{
              ($i18n && $i18n.locale === 'ar')
                ? (client.name_ar || client.name)
                : (client.name_en || client.name)
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.client-card {
  transition: background-color 0.3s, transform 0.3s;
}

.client-card:hover {
  transform: translateY(-5px);
}

.logo-container {
  transition: transform 0.3s;
  width: 8rem;
  height: 8rem;
 
}


</style>
