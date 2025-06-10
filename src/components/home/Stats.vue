<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Number animation function
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.value = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj1 = ref(0);
const obj2 = ref(0);
const obj3 = ref(0);
const obj4 = ref(0);
const obj5 = ref(0);

let observer = null;

// Intersection Observer callback
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      animateValue(obj1, 0, 100, 5000);  
      animateValue(obj2, 0, 50, 5000);  
      animateValue(obj3, 0, 10, 5000); 
      animateValue(obj4, 0, 100, 5000);  
      animateValue(obj5, 0, 50, 5000);  
      observer.disconnect();  
    }
  });
}

onMounted(() => {
  const target = document.querySelector('.counter-section');

  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  if (target) {
    observer.observe(target);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});

const { t, locale } = useI18n();
const isRtl = computed(() => locale.value === 'ar');
</script>

<template>
  <div class="px-4 sm:px-8 md:px-20 py-8 counter-section" :dir="isRtl ? 'rtl' : 'ltr'">
    <h1 :class="[isRtl ? 'text-right' : 'text-left', 'text-3xl sm:text-4xl md:text-5xl py-10 text-black']">
      {{ t('home.stats.title') }}
    </h1>
    <h1 :class="[isRtl ? 'text-right' : 'text-left', 'text-lg sm:text-xl md:text-2xl py-2 text-black']">
      {{ t('home.stats.subtitle') }}
    </h1>

    <div class="flex flex-wrap w-[95%] ml-auto mr-auto justify-between py-20">
      <div class="counter-container text-hover cursor-pointer w-36" :class="isRtl ? 'text-right' : 'text-left'">
        <div class="text-hover-child counter"><span class="text-lg">{{ t('home.stats.over') }}</span> {{ obj1 }}</div>
        <div class="text-lg sm:text-xl md:text-xl text-gray-500">{{ t('home.stats.completedProjects') }}</div>
      </div>
      <div class="counter-container text-hover cursor-pointer w-36" :class="isRtl ? 'text-right' : 'text-left'">
        <div class="text-hover-child counter">{{ obj2 }}</div>
        <div class="text-lg sm:text-xl md:text-xl text-gray-500">{{ t('home.stats.ongoingProjects') }}</div>
      </div>
      <div class="counter-container text-hover cursor-pointer w-36" :class="isRtl ? 'text-right' : 'text-left'">
        <div class="text-hover-child counter">{{ obj3 }}</div>
        <div class="text-lg sm:text-xl md:text-xl text-gray-500">{{ t('home.stats.differentSpaces') }}</div>
      </div>
      <div class="counter-container text-hover cursor-pointer w-36" :class="isRtl ? 'text-right' : 'text-left'">
        <div class="text-hover-child counter"><span class="text-lg">{{ t('home.stats.over') }}</span> {{ obj5 }}</div>
        <div class="text-lg sm:text-xl md:text-xl text-gray-500">{{ t('home.stats.qualifiedEngineers') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counter {
  font-size: 25px;

}
@media (min-width: 640px) {
  .counter {
    font-size: 25px;
  }
}
@media (min-width: 1024px) {
  .counter {
    font-size: 35px;
  }
}
.text-hover .text-hover-child:hover{
    color: #E62D18;
    transition: 0.3s ease-in-out;
}
</style>
