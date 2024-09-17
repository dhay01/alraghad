<script setup>


</script>

<template>
  <div class="px-20 py-10">

    <h1 class="text-left text-5xl py-10 text-black  ">Meet our team</h1>

    <div v-bind:class="['carousel', 'carousel-center', 'rounded-box', 'max-w-full', 'space-x-10', 'p-4']">


      <div class="carousel-item ">
        <div  class="h-[300px] w-[250px] imgbg1 rounded-2xl">
          <h1 class="text-3xl pt-52 px-4 text-white ">john doe</h1>
          <p class="py-2 px-4 text-xl text-white">
            Engineer</p>
        </div>
      </div>
      <div class="carousel-item">
        <div
           class="h-[300px] w-[250px] imgbg2 rounded-2xl">
          <h1 class="text-3xl pt-52 px-4 text-white ">john doe</h1>
          <p class="py-2 px-4 text-xl text-white">
            Engineer</p>
        </div>
      </div>
      <div class="carousel-item">
        <div
            class="h-[300px] w-[250px] imgbg3 rounded-2xl">
          <h1 class="text-3xl pt-52 px-4 text-white ">john doe</h1>
          <p class="py-2 px-4 text-xl text-white">
            Engineer</p>
        </div>
      </div>
      <div class="carousel-item">
        <div
            class="h-[300px] imgbg4 w-[250px] rounded-2xl">
          <h1 class="text-3xl pt-52 px-4 text-white ">john doe</h1>
          <p class="py-2 px-4 text-xl text-white">
            Engineer</p>
        </div>
      </div>
      <div class="carousel-item">
        <div
            class="h-[300px] imgbg5 w-[250px] rounded-2xl">
          <h1 class="text-3xl pt-52 px-4 text-white ">john doe</h1>
          <p class="py-2 px-4 text-xl text-white">
            Engineer</p>
        </div>
      </div>
      <div class="carousel-item">
        <div
            class="h-[300px] imgbg6 w-[250px] rounded-2xl">
          <h1 class="text-3xl pt-52 px-4 text-white ">john doe</h1>
          <p class="py-2 px-4 text-xl text-white">
            Engineer</p>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.imgbg1 {
  background-image: url('/src/assets/team/1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.imgbg2 {
  background-image: url('/src/assets/team/2222.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.imgbg3 {
  background-image: url('/src/assets/team/333.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.imgbg4 {
  background-image: url('/src/assets/team/888.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.imgbg5 {
  background-image: url('/src/assets/team/555.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.imgbg6 {
  background-image: url('/src/assets/team/666.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>