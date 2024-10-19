<script setup>
import { ref } from 'vue';

// Define props
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const heroImage = ref(props.images[0]);
const updateHeroImage = (newSrc) => {
  heroImage.value = newSrc;
};
</script>

<template>
  <div class="px-5 py-10">
    <div class="mb-5" style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
      <div style="width: 100%;">
        <img id="hero" width="100%" height="400" class="rounded-box fixed-height" :src="heroImage" alt="Logo"/>
      </div>
    </div>
    <div class="carousel carousel-center ml-0 rounded-box max-w-full space-x-2">
      <div class="carousel-item rounded-box" v-for="(image, index) in props.images" :key="index">
        <img :src="image" width="200" height="150" class="rounded-box fixed-height" alt="Logo" @click="updateHeroImage(image)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  cursor: pointer;
}

.fixed-height {
  height: 150px;
  object-fit: cover;
}

#hero.fixed-height {
  height: 600px;
  object-fit: cover;
}
</style>