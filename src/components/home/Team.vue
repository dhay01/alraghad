<template>
  <div class="px-4 md:px-20 py-10">
    <div class="container mx-auto">
      <h1 class="text-left text-3xl md:text-5xl py-10 text-black">Meet Our Team</h1>
      <div class="flex justify-center">
        <Carousel class="w-full" :value="teamMembers" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions">
          <template #item="slotProps">
            <div class="team-member ml-4 relative">
              <div class="relative w-full h-full">
                <!-- Skeleton loader -->
                <div v-if="slotProps.data.isLoading" class="skeleton w-full h-full rounded-lg"></div>

                <!-- Lazy-loaded image with skeleton placeholder -->
                <img
                    v-show="!slotProps.data.isLoading"
                    :src="slotProps.data.photo || '/src/assets/placeholder.jpg'"
                    @load="handleImageLoad(slotProps.data)"
                    :alt="slotProps.data.name"
                    class="w-full h-full object-cover rounded-lg"
                />
              </div>

              <!-- Overlay with name and position -->
              <div class="overlay absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end text-white p-4 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                <div class="text-container">
                  <h1 :class="nameClass(slotProps.data.name)" class="font-medium">{{ slotProps.data.name }}</h1>
                  <p :class="positionClass(slotProps.data.position)" class="text-sm">{{ slotProps.data.position }}</p>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../includes/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from 'primevue/carousel';

const teamMembers = ref([]);
const responsiveOptions = ref([
  { breakpoint: '1600px', numVisible: 5, numScroll: 1 },
  { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
  { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
  { breakpoint: '767px', numVisible: 1, numScroll: 1 }
]);

async function fetchTeam() {
  try {
    const querySnapshot = await getDocs(collection(db, 'team'));
    teamMembers.value = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
          isLoading: true // Add isLoading property for each team member
        }))
        .sort((a, b) => a.no - b.no); // Sorting by 'no' field
  } catch (error) {
    console.error('Error fetching team members:', error);
  }
}

function handleImageLoad(member) {
  member.isLoading = false;
}

// Dynamic classes to adjust font size based on text length
function nameClass(name) {
  if (name.length > 15) return 'text-base'; // Smaller for longer names
  if (name.length > 10) return 'text-lg';
  return 'text-xl';
}

function positionClass(position) {
  if (position.length > 20) return 'text-xs'; // Smaller for longer positions
  return 'text-sm';
}

onMounted(fetchTeam);
</script>

<style scoped>
.skeleton {
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite;
  height: 100%;
  width: 100%;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.team-member {
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 220px;
  height: 300px;
}

.team-member:hover {
  transform: scale(1.02);
}

.overlay {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  padding: 10px;
  border-radius: 8px;
}

.text-container h1,
.text-container p {
  margin: 0;
  padding: 0;
  word-wrap: break-word;
}

@media (max-width: 1400px) {
  .team-member {
    width: 200px;
    height: 280px;
  }
}

@media (max-width: 1199px) {
  .team-member {
    width: 180px;
    height: 260px;
  }
}

@media (max-width: 767px) {
  .team-member {
    width: 150px;
    height: 230px;
  }
}
</style>
