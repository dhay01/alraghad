<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, locale } = useI18n();
const aboutHistory = computed(() => t('about.history'));
const isRtl = computed(() => locale.value === 'ar');
</script>

<template>
  <div class="hero-content flex-col lg:flex-row items-start" :dir="isRtl ? 'rtl' : 'ltr'">
    <p class="text-2xl text-justify" :class="isRtl ? 'text-right' : 'text-left'">
      {{ aboutHistory }}
    </p>
  </div>
</template>

<style scoped>

</style>