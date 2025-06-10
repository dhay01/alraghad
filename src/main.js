import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import './assets/main.css'; // Ensure this is placed correctly
import lazyLoad from './directives/lazyLoad';
import rtl from './directives/rtl';
import i18n, { loadTranslations } from './i18n';
import { db } from './includes/firebase';

// Add icons to the library
library.add(faUserSecret);

// Create and mount the app
const app = createApp(App);
app.directive('lazy-load', lazyLoad);
app.directive('rtl', rtl);
app.use(PrimeVue, { theme: Aura });
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

// Load translations from Firestore before mounting
loadTranslations().then(() => {
  app.use(i18n);
  app.mount('#app');
});
