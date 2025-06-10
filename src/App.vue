<script setup>
import {RouterLink, RouterView} from 'vue-router';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {ref, onMounted, watch, computed} from 'vue';
import footer from '@/assets/jobs/footer.svg';
import { useI18n } from 'vue-i18n'

// State to manage the mobile menu toggle
const isMenuOpen = ref(false);
const { locale } = useI18n()

// Function to toggle the menu
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function downloadCompanyProfile() {
  const link = document.createElement('a');
  link.href = '/company-profile.pdf';  // Update the path if necessary
  link.download = 'Company_Profile.pdf';  // Set the desired file name for download
  link.click();
}

// Function to switch language
function switchLanguage(lang) {
  locale.value = lang
  localStorage.setItem('preferredLanguage', lang)
}

// Watch for locale changes to update document direction
watch(locale, (newLocale) => {
  if (newLocale === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl')
    document.documentElement.setAttribute('lang', 'ar')
  } else {
    document.documentElement.setAttribute('dir', 'ltr')
    document.documentElement.setAttribute('lang', 'en')
  }
})

// Load saved language preference on mount
onMounted(() => {
  const savedLanguage = localStorage.getItem('preferredLanguage')
  if (savedLanguage) {
    switchLanguage(savedLanguage)
  }
})

const langToggleLabel = computed(() => locale.value === 'ar' ? 'EN' : 'AR');
function toggleLanguage() {
  switchLanguage(locale.value === 'ar' ? 'en' : 'ar');
}
</script>

<template>
  <div v-rtl>
    <header>
      <div class="navbar bg-white px-4 py-2">
        <div class="flex-1">
          <RouterLink to="/">
            <img src="/src/assets/Logo.png" class="w-32 sm:w-56" alt="Logo"/>
          </RouterLink>
        </div>
        <!-- Hamburger icon for mobile view -->
        <button
            class="block lg:hidden text-gray-600 focus:outline-none"
            @click="toggleMenu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15" stroke="#51526C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 14H15" stroke="#51526C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 2H15" stroke="#51526C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="flex-none hidden lg:flex">
          <ul class="menu menu-horizontal px-1 items-center">
            <li>
              <RouterLink to="/">{{ $t('nav.home') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/about">{{ $t('nav.about') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/projects">{{ $t('nav.projects') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/clients">{{ $t('nav.clients') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/jobs">{{ $t('nav.jobs') }}</RouterLink>
            </li>
            <li>
              <a @click="downloadCompanyProfile">{{ $t('nav.companyProfile') }}</a>
            </li>
            <li>
              <button @click="toggleLanguage" class="focus:outline-none bg-transparent border-none px-1 py-0 flex items-center text-xs  uppercase tracking-wider h-8 min-w-[32px] rounded transition">
                {{ langToggleLabel }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile menu (only visible when isMenuOpen is true) -->
      <div v-if="isMenuOpen" class="lg:hidden">
        <ul class="menu p-2 bg-gray-100 space-y-2">
          <li>
            <RouterLink to="/" @click="toggleMenu">{{ $t('nav.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" @click="toggleMenu">{{ $t('nav.about') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects" @click="toggleMenu">{{ $t('nav.projects') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/clients" @click="toggleMenu">{{ $t('nav.clients') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/jobs" @click="toggleMenu">{{ $t('nav.jobs') }}</RouterLink>
          </li>
          <li>
            <a @click="downloadCompanyProfile">{{ $t('nav.companyProfile') }}</a>
          </li>
          <li>
            <details>
              <summary>{{ $t('nav.language') }}</summary>
              <ul class="bg-gray-200 rounded-t-none p-2">
                <li><a @click="() => { switchLanguage('en'); toggleMenu(); }">English</a></li>
                <li><a @click="() => { switchLanguage('ar'); toggleMenu(); }">العربية</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>

    <RouterView/>

    <footer className="footer bg-[#F4F4F4] text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <RouterLink to="/">
          <img src="/src/assets/Logo.png" class="w-20 sm:w-32" alt="Logo"/>
        </RouterLink>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/company/al-raghad-int-group/">
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#422A86"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100063996616357">
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#422A86"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/al.raghad.intl/">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#422A86"
                d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/>
          </svg>
        </a>
      </nav>
    </footer>
    <footer
        class="footer footer-left bg-base-300 text-white p-4"
        :style="{
      backgroundImage: `url(${footer})`,
      backgroundSize: 'cover',
      }"
    >
      <aside>
        <p>© 2024 Al-raghad group. All rights reserved.</p>
      </aside>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Tajawal:wght@200;300;400;500;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

a {
  font-family: Ubuntu;
}

ul li:hover {
  color: #be4545;
  text-decoration: underline;
}

/* Remove background on hover or click */
li a, li summary {
  background: none !important;
  color: inherit;
}

/* Ensure no background is shown when active (clicked) */
li a:active, li summary:active {
  background: none !important;
  color: inherit;
}

.hover\:bg-none:hover {
  background: none !important;
}

/* Add RTL support for Arabic */
[dir="rtl"] {
  text-align: right;
}

/* Style for language switcher */
details summary {
  cursor: pointer;
}

details ul {
  min-width: 120px;
}

details ul li a {
  padding: 0.5rem 1rem;
  display: block;
  transition: background-color 0.2s;
}

details ul li a:hover {
  background-color: #f3f4f6 !important;
}

header {
  position: relative;
  z-index: 50;
}
</style>





