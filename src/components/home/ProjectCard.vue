<script setup>
import {ref} from 'vue';
import {defineProps} from 'vue';
import {useRouter} from 'vue-router';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const router = useRouter();
const isLoading = ref(true); // Track the image loading state

function navigateToProject() {
  router.push({name: 'project-details', params: {id: props.project.id}});
}

function handleImageLoad() {
  isLoading.value = false; // Set loading to false once the image has loaded
}
</script>
<template>
  <div class="card w-full md:w-80">
    <figure class="relative">
      <!-- Show skeleton only if isLoading is true -->
      <div v-if="isLoading" class="skeleton w-full h-80 rounded-3xl p-2"></div>
      <!-- Ensure @load event fires correctly by adding v-show instead of v-else -->
      <img
          v-show="!isLoading"
          @load="handleImageLoad"
          class="rounded-3xl p-2 w-full h-80 object-cover"
          :src="project.photo || '/src/assets/DSC07785.jpg'"
          alt="header"
          @error="isLoading = false"
      />
    </figure>
    <div class="card-body text-black">
      <h2 class="card-title">{{ project.title }}</h2>
      <div class="grid grid-cols-2 gap-4 md:gap-16">
        <div>
          <p class="text-sm">Location: </p>
          <p class="text-sm">Client: </p>
          <p class="text-sm">Starting Date: </p>
        </div>
        <div>
          <p class="text-sm">{{ project.location }}</p>
          <p class="text-sm whitespace-nowrap">{{ project.client }}</p>
          <p class="text-sm">{{ project.date }}</p>
        </div>
      </div>
      <div class="card-actions py-4 w-full justify-end">
        <button
            @click="navigateToProject"
            class="btn w-full hover:bg-[#E62D18] bg-white text-black border-black hover:text-white hover:border-none rounded-3xl"
        >
          Read More
          <svg
              width="20"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 27.5C22.4036 27.5 28 21.9036 28 15C28 8.09644 22.4036 2.5 15.5 2.5C8.59644 2.5 3 8.09644 3 15C3 21.9036 8.59644 27.5 15.5 27.5ZM12.6875 11.25C12.6875 10.7322 13.1072 10.3125 13.625 10.3125H19.25C19.7678 10.3125 20.1875 10.7322 20.1875 11.25V16.875C20.1875 17.3928 19.7678 17.8125 19.25 17.8125C18.7322 17.8125 18.3125 17.3928 18.3125 16.875V13.5133L12.4129 19.4129C12.0468 19.779 11.4532 19.779 11.0871 19.4129C10.721 19.0468 10.721 18.4532 11.0871 18.0871L16.9867 12.1875H13.625C13.1072 12.1875 12.6875 11.7678 12.6875 11.25Z"
                fill="#202020"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite;
}

/* Match the height of the skeleton to the photo height */
.skeleton {
  height: 20rem; /* Adjust this value as needed */
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

.btn:hover .svg path {
  fill: white;
}
</style>
