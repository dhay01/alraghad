<script setup>
import Iraqmap from './subcomponents/Map.vue'
import {RouterLink} from "vue-router";
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, locale } = useI18n();
const isRtl = computed(() => locale.value === 'ar');
</script>

<template>
  <div class="grid grid-cols-1 mb-10 md:grid-cols-2 ">
    <div class="flex items-center justify-center">
      <iraqmap/>
    </div>
    <div class="flex items-center justify-center px-4 md:px-10 py-8">
      <div>
        <RouterLink to="/projects">
          <h1 :class="[isRtl ? 'text-right' : 'text-left', 'text-3xl  md:text-5xl flex items-center']">
            {{ t('home.map.title') }}
            <span class="ml-2">
              <svg width="40" height="40" viewBox="0 0 31 30" fill="none" class="svg" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15.5 27.5C22.4036 27.5 28 21.9036 28 15C28 8.09644 22.4036 2.5 15.5 2.5C8.59644 2.5 3 8.09644 3 15C3 21.9036 8.59644 27.5 15.5 27.5ZM12.6875 11.25C12.6875 10.7322 13.1072 10.3125 13.625 10.3125H19.25C19.7678 10.3125 20.1875 10.7322 20.1875 11.25V16.875C20.1875 17.3928 19.7678 17.8125 19.25 17.8125C18.7322 17.8125 18.3125 17.3928 18.3125 16.875V13.5133L12.4129 19.4129C12.0468 19.779 11.4532 19.779 11.0871 19.4129C10.721 19.0468 10.721 18.4532 11.0871 18.0871L16.9867 12.1875H13.625C13.1072 12.1875 12.6875 11.7678 12.6875 11.25Z"
                      fill="#422A86"/>
              </svg>
            </span>
          </h1>
        </RouterLink>

        <p :class="[isRtl ? 'text-right' : 'text-left', 'text-black w-full md:w-[450px] py-4 text-base md:text-xl']">
          {{ t('home.map.description') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
