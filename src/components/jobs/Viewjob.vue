<!--<script setup>-->
<!--import {defineProps} from 'vue';-->

<!--const props = defineProps({-->
<!--  item: {-->
<!--    type: Object,-->
<!--    required: true-->
<!--  }-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  &lt;!&ndash; Open the modal using ID.showModal() method &ndash;&gt;-->
<!--  <button class="btn" onclick="my_modal_2.showModal()">open modal</button>-->
<!--  <dialog id="my_modal_2" v-if="item" class="modal bg-black-200">-->
<!--    <div class="modal-box rounded-box bg-white">-->
<!--      <h3 class="text-lg font-bold">{{item.title}}</h3>-->
<!--      <p class="py-4">Press ESC key or click outside to close</p>-->

<!--    </div>-->
<!--    <form method="dialog" class="modal-backdrop">-->
<!--      <button>close</button>-->
<!--    </form>-->
<!--  </dialog>-->
<!--</template>-->

<!--<style scoped>-->

<!--</style>-->
<script setup>
import {defineProps, watch} from 'vue';

// Define the component props to receive the job data
const props = defineProps({
  item: {
    type: Object,
    required: false
  }
});

// Watch for changes in the `item` prop and log when it changes (for debugging)
watch(() => props.item, (newVal) => {
  console.log("Selected Job:", newVal);
});
</script>

<template>
  <!-- Modal Structure -->
  <dialog id="job_modal" class="modal bg-black-200">
    <div v-if="item" class="modal-box rounded-box bg-white">
      <div class="flex justify-between items-center w-full">
        <div>
          <h3 class="text-2xl text-[#422A86] font-bold">{{ item.title }}</h3>
        </div>
        <!-- Left Side (Close Button) -->
        <div class="modal-action mt-0">
          <form method="dialog">
            <!-- If there is a button in form, it will close the modal -->
            <button class="btn bg-transparent hover:bg-transparent border-none shadow-none">
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.7813 15C28.7813 7.38883 22.6112 1.21875 15 1.21875C7.38883 1.21875 1.21875 7.38883 1.21875 15C1.21875 22.6112 7.38883 28.7813 15 28.7813C22.6112 28.7813 28.7813 22.6112 28.7813 15Z" stroke="#9E9E9E" stroke-opacity="0.7" stroke-width="1.2" stroke-miterlimit="10"/>
                <path d="M10.3125 10.3125L19.6875 19.6875" stroke="#9E9E9E" stroke-opacity="0.7" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M19.6875 10.3125L10.3125 19.6875" stroke="#9E9E9E" stroke-opacity="0.7" stroke-width="1.2" stroke-linecap="round"/>
              </svg>

            </button>
          </form>
        </div>

        <!-- Right Side (Title) -->

      </div>



      <p class="text-gray-600">Location: {{ item.location }}</p>
      <p class="py-4">job description: {{ item.description }}</p>
      <button class="btn hover:bg-[#09529C] bg-[#0A66C2] text-white rounded-box w-full">
        view on linkedin
        <p>
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1044_9758)">
              <path
                  d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z"
                  fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_1044_9758">
                <rect width="30" height="30" fill="white"/>
              </clipPath>
            </defs>
          </svg>

        </p>
      </button>

    </div>

  </dialog>
</template>

<style scoped>
.modal-box {
  max-width: 500px;
}
</style>
