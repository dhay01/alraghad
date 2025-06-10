<script setup>
import {ref, computed} from 'vue';
import { useI18n } from 'vue-i18n';

const openSection = ref('mission');
const { t, locale } = useI18n();

function toggleSection(section) {
  openSection.value = openSection.value === section ? null : section;
}

const aboutValues = computed(() => {
  const values = t('about.values');
  if (typeof values === 'string') {
    return values.split('\n');
  }
  return Array.isArray(values) ? values : [];
});
</script>

<template>
  <div>
    <div
      tabindex="0"
      :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'mission' }]"
      @click="toggleSection('mission')">
      <div class="collapse-title text-xl font-medium text-gray-700">{{ $t('about.missionTitle') || 'Mission' }}</div>
      <div class="collapse-content text-lg text-justify text-gray-600 leading-relaxed">
        <p>{{ $t('about.mission') }}</p>
      </div>
    </div>

    <div
      tabindex="0"
      :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'vision' }]"
      @click="toggleSection('vision')">
      <div class="collapse-title text-xl font-medium text-gray-700">{{ $t('about.visionTitle') || 'Vision' }}</div>
      <div class="collapse-content text-lg text-gray-600 leading-relaxed">
        <p>{{ $t('about.vision') }}</p>
      </div>
    </div>

    <div
      tabindex="0"
      :class="['collapse', 'collapse-arrow',  'my-10', { 'collapse-open': openSection === 'values' }]"
      @click="toggleSection('values')">
      <div class="collapse-title text-xl font-medium text-gray-700">{{ $t('about.valuesTitle') || 'Values' }}</div>
      <div class="collapse-content  text-lg text-gray-600 leading-relaxed">
        <ul class="list-disc list-inside">
          <li v-for="(value, idx) in aboutValues" :key="idx">{{ value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.collapse-title {
  cursor: pointer;
}
</style>
