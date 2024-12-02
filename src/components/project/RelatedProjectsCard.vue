<script setup>
import {ref} from 'vue';
import {defineProps} from 'vue';
import {useRouter} from 'vue-router';

defineProps({
  relatedProjects: {
    type: Array,
    required: true,
  },
});

const isLoading = ref(true);
const router = useRouter();

function navigateToProject(projectId) {
  router.push({
    name: 'related-project',
    params: { id: projectId },
  });
}



function handleImageLoad() {
  isLoading.value = false;
}
</script>

<template>
  <div class="container min-h-screen mx-auto px-5 sm:px-10 py-20">
    <div v-if="relatedProjects.length > 0">


    <h3  class="text-left text-3xl md:text-5xl py-10 text-black">
      Related Projects
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

      <div
          v-for="(project, index) in relatedProjects"
          :key="index"
          class="card w-full p-3 bg-gray-50 rounded-box transition-transform transform hover:scale-105 "
      >
        <figure class="relative">

          <img

              class="rounded-3xl cursor-pointer p-2 w-full h-80 object-cover"
              :src="project.photo || '/src/assets/DSC07785.jpg'"
              alt="related project"
              @error="isLoading = false"
          />
        </figure>
        <div class="card-body w-full text-black flex flex-col">
          <h2 class="card-title text-lg font-bold">
            {{ project.title || 'Untitled' }}
          </h2>

          <!-- Project details -->
          <div class="details grid grid-cols-2 gap-4 flex-grow">
            <div class="text-sm font-semibold">Location:</div>
            <div class="text-sm">{{ project.location || 'Not available' }}</div>

            <div class="text-sm font-semibold">Client:</div>
            <div class="text-sm">{{ project.client || 'Not available' }}</div>

            <div class="text-sm font-semibold">Starting Date:</div>
            <div class="text-sm">{{ project.date || 'Not available' }}</div>
          </div>

          <div class="card-actions pt-4">
            <button @click="navigateToProject(project.id)"
                    class="btn w-full hover:bg-[#E62D18] bg-white text-black border-black hover:text-white hover:border-none rounded-3xl"
            >
              Read More
              <svg
                  width="20"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
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
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>