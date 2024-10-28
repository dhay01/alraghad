<script setup>
import {RouterLink, RouterView} from 'vue-router';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {ref} from 'vue';
import footer from '@/assets/jobs/footer.svg';
// State to manage the mobile menu toggle
const isMenuOpen = ref(false);

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
</script>

<template>
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
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/">home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">about us</RouterLink>
          </li>
          <li> <RouterLink to="/projects">projects</RouterLink></li>
          <li>
            <RouterLink to="/clients">clients</RouterLink>
          </li>
          <li>
            <RouterLink to="/certificates">certificates</RouterLink>


          </li>
          <li>
            <RouterLink to="/jobs">jobs</RouterLink>
          </li>
          <li>
           <a @click="downloadCompanyProfile">company profile</a>
          </li>
          <li>
            <details>
              <summary>language</summary>
<!--              <ul class="bg-gray-200 rounded-t-none p-2">-->
<!--                <li><a>arabic</a></li>-->
<!--                <li><a>english</a></li>-->
<!--              </ul>-->
            </details>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile menu (only visible when isMenuOpen is true) -->
    <div v-if="isMenuOpen" class="lg:hidden">
      <ul class="menu p-2 bg-gray-100 space-y-2">
        <li>
          <RouterLink to="/" @click="toggleMenu">home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" @click="toggleMenu">about us</RouterLink>
        </li>
        <li><a @click="toggleMenu">projects</a></li>
        <li>
          <RouterLink to="/clients" @click="toggleMenu">clients</RouterLink>
        </li>
<!--        <li><a @click="toggleMenu">awards and certificates</a></li>-->
        <li>
          <RouterLink to="/jobs" @click="toggleMenu">jobs</RouterLink>
        </li>
        <li>
          <details>
            <summary>language</summary>
            <ul class="bg-gray-200 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
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
      <a>
        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1044_9758)">
            <path
                d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z"
                fill="#0A66C2"/>
          </g>
          <defs>
            <clipPath id="clip0_1044_9758">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a>
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3511_2)">
            <path
                d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                fill="#000100"/>
            <path
                d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                fill="#000100"/>
            <path
                d="M39.6937 11.1844C39.6937 12.7782 38.4 14.0625 36.8156 14.0625C35.2219 14.0625 33.9375 12.7688 33.9375 11.1844C33.9375 9.59065 35.2313 8.30627 36.8156 8.30627C38.4 8.30627 39.6937 9.60003 39.6937 11.1844Z"
                fill="#000100"/>
          </g>
          <defs>
            <clipPath id="clip0_3511_2">
              <rect width="48" height="48" fill="white"/>
            </clipPath>
          </defs>
        </svg>

      </a>
      <a>
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3511_3)">
            <rect width="48" height="48" rx="2" fill="#0866FF"/>
            <path
                d="M48 24C48 10.7453 37.2547 0 24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24H48Z"
                fill="#0866FF"/>
            <path
                d="M33.4003 31.3344L34.7472 24H26.9078V21.4061C26.9078 17.5306 28.4285 16.0397 32.3635 16.0397C33.5856 16.0397 34.5696 16.0694 35.136 16.129V9.48096C34.0627 9.1824 31.439 8.8848 29.9184 8.8848C21.8986 8.8848 18.2016 12.671 18.2016 20.8397V24H13.2528V31.3344H18.2016V47.2934C20.0582 47.7542 22.0003 48 23.999 48C24.983 48 25.9536 47.9395 26.9069 47.8243V31.3344H33.3994H33.4003Z"
                fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_3511_3">
              <rect width="48" height="48" rx="2" fill="white"/>
            </clipPath>
          </defs>
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
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

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
</style>





