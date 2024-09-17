<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue';
import WhatWeDo from './components/WhatWeDo.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>

<template>
  <header>
     
    <div className="navbar bg-white">
  <div className="flex-1">
    <img src="/src/assets/Logo.png" width="200"/>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>home</a></li>
      <li><a>about us</a></li>
      <li><a>projects</a></li>
      <li><a>awards and certificates</a></li>
      <li><a>jobs</a></li>
      <li>
        <details>
          <summary>language</summary>
          <ul className="bg-gray-200 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  </header>


  <RouterView />
  <footer>
    <img src="/src/assets/footer.png" width="100%"/>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
a {
  font-family : Ubuntu;
}

ul li:hover{
  color: #422A86;
  text-decoration: underline;
}

</style>
