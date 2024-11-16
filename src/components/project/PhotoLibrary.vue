
<template>
  <div class="px-10 py-10 flex justify-center items-center">
    <!-- PrimeVue Galleria Gallery -->
    <Galleria
        ref="galleria"
        :value="props.images"
        v-model:activeIndex="selectedIndex"
        :numVisible="5"
        :responsiveOptions="responsiveOptions"
        containerStyle="max-width: 100%; width: 100%;"
    >
      <template #item="slotProps">
        <div class="relative">
          <img
              :src="slotProps.item"
              alt="Image"
              :style="imageStyle"
              class="rounded mb-4 cursor-pointer"
              @click="openModal(slotProps.item, slotProps.index)"
          />
        </div>
      </template>
      <template #thumbnail="slotProps">
        <img
            :src="slotProps.item"
            alt="Thumbnail"
            class="rounded"
            style="width: 180px; height: 150px; object-fit: cover;"
        />
      </template>
    </Galleria>

    <!-- Modal for Full Image -->
    <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="relative bg-white p-4 rounded-lg">
        <button @click="closeModal" class="absolute bg-opacity-50 hover:bg-opacity-90 transition-all ease-in-out top-2 right-2 bg-gray-500 text-white rounded-full p-2">X</button>

        <img :src="selectedImage" alt="Full Image" class="max-w-full max-h-[90vh] object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Galleria from "primevue/galleria";

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const modalVisible = ref(false);  // Modal visibility state
const selectedImage = ref("");    // Image to display in the modal
const selectedIndex = ref(0);     // Selected image index

// Open the modal and set the selected image
const openModal = (image, index) => {
  selectedImage.value = image;
  selectedIndex.value = index;
  modalVisible.value = true;
};

// Close the modal
const closeModal = () => {
  modalVisible.value = false;
};

// Navigate to the previous image
const prevImage = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

// Navigate to the next image
const nextImage = () => {
  if (selectedIndex.value < props.images.length - 1) {
    selectedIndex.value++;
  }
};

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4
  },
  {
    breakpoint: "575px",
    numVisible: 1
  }
]);

// Fixed width and height for the images in the gallery (small and medium screens)
const imageStyle = computed(() => ({
  width: "1040px",  // Fixed width for the gallery images
  height: "550px", // Fixed height for the gallery images
  objectFit: "cover" // Maintain aspect ratio while filling the space
}));
</script>

<style scoped>
.p-galleria,
.p-galleria img,
.galleria-container,
.galleria-thumbnail img,
.p-galleria-item {
  border: none !important;
  box-shadow: none !important;
}

button i.pi {
  font-size: 1.5rem;
}

.fixed {
  position: fixed;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}

.max-w-full {
  max-width: 100%;
}

.max-h-[90vh] {
  max-height: 90vh;
}

.object-contain {
  object-fit: contain;  /* Keep the full image viewable without cropping */
}

/* Additional custom styles */
.p-galleria .p-galleria-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* This ensures that the gallery images maintain the aspect ratio without distortion */
}
</style>



