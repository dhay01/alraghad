<script setup>
import { ref } from 'vue';

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

const obj = ref(null);
animateValue(obj, 0, 50, 5000);

</script>
<template>
   <div class="px-20 py-10">
    <h1 class="text-left text-5xl py-10 text-black">Our legacy of excellence</h1>
    <h1 class="text-left text-2xl py-2 text-black">At Al-Raghad Group, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's what we offer:</h1>

    <div class="grid grid-cols-4 py-20 gap-4">
        <div>
            <div class="counter-container">
                <div class="counter">+{{ obj }}</div>
                <div class="text-2xl text-black">completed projects</div>
                
            </div>
        </div>
        <div>
            <div class="counter-container">
                <div class="counter">+{{ obj }}</div>
                <div class="text-2xl text-black">ongoing projects</div>
            </div>
        </div>
        <div>
            <div class="counter-container">
                <div class="counter">+{{ obj }}</div>
                <div class="text-2xl text-black">Satisfied clients</div>
            </div>
        </div>
        <div>
            <div class="counter-container">
                <div class="counter">+{{ obj }}</div>
                <div class="text-2xl text-black">Qualified engineers</div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
.counter {
    font-size: 60px;
    color: black;
}
</style>
