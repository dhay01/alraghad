
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
        dir="ltr"
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

.max-h-90vh {
  max-height: 90vh;
}

.object-contain {
  object-fit: contain;  
}

/* Additional custom styles */
.p-galleria .p-galleria-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;  
}
/* Ensure the overall direction of the Galleria element itself is LTR */
/* This might be redundant if the prop is working, but harmless to include */
.p-galleria {
    direction: ltr !important;
}

/* Target the main image navigation buttons */
.p-galleria .p-galleria-next,
.p-galleria .p-galleria-prev {
    /* Ensure no flex-direction reversal or positioning issues */
    right: 0px !important; /* Adjust if PrimeVue uses non-zero values by default */
    left: 0px !important; /* Adjust if PrimeVue uses non-zero values by default */
    transform: none !important; /* Remove any transform that might be flipping the button itself */
}

/* Target the icons within the main image navigation buttons */
/* The icons are usually 'pi pi-chevron-left' and 'pi pi-chevron-right' */
.p-galleria .p-galleria-next .pi,
.p-galleria .p-galleria-prev .pi {
    transform: scaleX(1) !important; /* Reset any horizontal flip */
    /* If the arrow is actually an SVG or background-image, you might need different rules */
}

/* Target the thumbnail navigation buttons */
.p-galleria .p-galleria-thumbnail-nav-button {
    /* Make sure their container is LTR if needed */
    direction: ltr !important;
    /* Reset any positioning that might be reversed in RTL */
    /* Check dev tools for exact default positioning values */
    right: 0px !important;
    left: 0px !important;
    transform: none !important; /* Remove any transform that might be flipping the button itself */
}

/* Target the icons within the thumbnail navigation buttons */
.p-galleria .p-galleria-thumbnail-nav-button .pi {
    transform: scaleX(1) !important; /* Reset any horizontal flip */
}

/* More general rule for any .pi (PrimeIcons) within an RTL context that should be LTR */
/* This is a broader stroke if the above specific rules don't catch all instances */
[dir="rtl"] .pi {
    transform: scaleX(1) !important;
}

/* If the problem is specifically the prev/next icon themselves. */
/* PrimeIcons for left and right are typically 'pi-chevron-left' and 'pi-chevron-right' */
.pi-chevron-left {
    transform: scaleX(1) !important; /* Ensure it's left-pointing */
}

.pi-chevron-right {
    transform: scaleX(1) !important; /* Ensure it's right-pointing */
}

/* Finally, if PrimeVue adds an RTL class to the component, target that specifically */
.p-galleria.p-component.p-galleria-rtl .p-galleria-next .pi,
.p-galleria.p-component.p-galleria-rtl .p-galleria-prev .pi,
.p-galleria.p-component.p-galleria-rtl .p-galleria-thumbnail-next .pi,
.p-galleria.p-component.p-galleria-rtl .p-galleria-thumbnail-prev .pi {
    transform: scaleX(1) !important;
}

.p-galleria.p-component.p-galleria-rtl .p-galleria-thumbnail-nav-button {
    left: auto !important; /* This might be key for thumbnail buttons */
    right: 0px !important; /* This might be key for thumbnail buttons */
}

/* And for the next button's positioning in RTL if it's swapping sides */
.p-galleria.p-component.p-galleria-rtl .p-galleria-thumbnail-next {
    right: 0 !important; /* Or whatever its original LTR right position was */
    left: auto !important;
}

.p-galleria.p-component.p-galleria-rtl .p-galleria-thumbnail-prev {
    left: 0 !important; /* Or whatever its original LTR left position was */
    right: auto !important;
}
</style>



