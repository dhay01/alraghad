<script setup>
import {ref} from 'vue';

// Initialize openSection with the first section to be open by default
const openSection = ref('overview');

// Function to toggle collapse sections
function toggleSection(section) {
  openSection.value = openSection.value === section ? null : section;
}
</script>

<template>
  <div class="container min-h-screen mx-auto px-4 py-10">
    <h1 class="text-5xl font-bold text-center py-8 text-gray-800">About Al Raghad Group</h1>

    <!-- Collapse Section for Company Overview -->
    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'overview' }]"
        @click="toggleSection('overview')">
      <div class="collapse-title text-xl font-medium text-gray-700">Company Overview</div>
      <div class="collapse-content text-lg text-gray-600 leading-relaxed">
        <p>
          In 1983, our establishment commenced operations in Baghdad as an electromechanical contracting and engineering
          services provider. Our core focus has been on delivering superior project management and services, emphasizing
          robust HVAC, firefighting, power generation, and sewer treatment management practices. By emphasizing a
          customer-centric approach, upholding contractual obligations with integrity, striving for continuous
          optimization of engineering quality, and enhancing service excellence, we have achieved the status of a
          premier first-class contractor since 2009.
        </p>
      </div>
    </div>

    <!-- Mission Section -->
    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'mission' }]"
        @click="toggleSection('mission')">
      <div class="collapse-title text-xl font-medium text-gray-700">Mission</div>
      <div class="collapse-content text-lg text-gray-600 leading-relaxed">
        <p>
          At Al Raghad Group, our mission is to ensure the seamless and secure operation of projects by continuously
          elevating professionalism and service quality in construction and MEP contracts. Al Raghad Factory is
          steadfast in its pursuit of excellence, striving to deliver cutting-edge technology products through
          meticulous auditing, rigorous quality control, and robust assurance measures. Moreover, we are committed to
          providing unparalleled after-sales support, including spare parts management, backed by a proficient team
          specializing in preventive maintenance and repairs.
        </p>
      </div>
    </div>

    <!-- Vision Section -->
    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow',  'my-10', { 'collapse-open': openSection === 'vision' }]"
        @click="toggleSection('vision')">
      <div class="collapse-title text-xl font-medium text-gray-700">Vision</div>
      <div class="collapse-content  text-lg text-gray-600 leading-relaxed">
        <p>
          Transforming visions into reality, we specialize in delivering exceptional electromechanical solutions
          throughout the Middle East, driven by our unwavering focus on quality, safety, and client satisfaction. We aim
          to emerge as a premier and dependable MEP contracting company in the Middle East and globally, consistently
          delivering unparalleled quality and exceeding client expectations.
        </p>
      </div>
    </div>

    <!-- Values Section -->
    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow',  'my-10', { 'collapse-open': openSection === 'values' }]"
        @click="toggleSection('values')">
      <div class="collapse-title text-xl font-medium text-gray-700">Values</div>
      <div class="collapse-content text-lg text-gray-600 leading-relaxed">
        <ul class="list-disc list-inside">
          <li>Comprehensive Planning and Efficient Time Management</li>
          <li>Cutting-Edge Engineering Services</li>
          <li>Adherence to the Highest Industry Benchmarks</li>
          <li>Establishment of Enduring Partnerships with Suppliers and Solution Providers</li>
          <li>Provision of Commissioning and Enhanced Commissioning Services Across All Projects</li>
        </ul>
      </div>
    </div>

    <!-- Milestones Section -->
    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'milestones' }]"
        @click="toggleSection('milestones')">
      <div class="collapse-title text-xl font-medium text-gray-700">Key Milestones</div>
      <div class="collapse-content text-lg text-gray-600 leading-relaxed">
        <ul class="list-disc list-inside">
          <li>1983: Established in Baghdad, Iraq</li>
          <li>1989: Established a Factory Specializing in HVAC System Manufacturing</li>
          <li>1990: Commenced manufacturing air washers, air handling units, and fan coil units</li>
          <li>1995: Major projects completed for Babylon Hospital, Olympic swimming pool, and Abu Ghraib projects</li>
          <li>2009: Designated as first-class contractors</li>
        </ul>
      </div>
    </div>
    <!--    <ul class="timeline">-->
    <!--      <li>-->
    <!--        <div class="timeline-start mb-10 md:text-end">-->
    <!--          <time class=" text-2xl font-black ">1984</time>-->

    <!--          <div class="w-96">-->
    <!--            The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh-->
    <!--            personal computer. It played a pivotal role in establishing desktop publishing as a general-->
    <!--            office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed-->
    <!--            in a beige case with integrated carrying handle; it came with a keyboard and single-button-->
    <!--            mouse.-->
    <!--          </div>-->

    <!--        </div>-->

    <!--        <div class="timeline-middle">-->
    <!--          <svg-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              viewBox="0 0 20 20"-->
    <!--              fill="currentColor"-->
    <!--              class="h-5 w-5">-->
    <!--            <path-->
    <!--                fill-rule="evenodd"-->
    <!--                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"-->
    <!--                clip-rule="evenodd"/>-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--        <hr style="background-color: black"/>-->
    <!--        <hr style="background-color: black"/>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <hr style="background-color: black"/>-->
    <!--        <div class="timeline-middle">-->
    <!--          <svg-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              viewBox="0 0 20 20"-->
    <!--              fill="currentColor"-->
    <!--              class="h-5 w-5">-->
    <!--            <path-->
    <!--                fill-rule="evenodd"-->
    <!--                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"-->
    <!--                clip-rule="evenodd"/>-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--        <div class="timeline-end timeline-box">iMac</div>-->

    <!--        <hr style="background-color: black"/>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <hr style="background-color: black"/>-->
    <!--        <div class="timeline-start timeline-box">iPod</div>-->
    <!--       -->
    <!--        <div class="timeline-middle">-->
    <!--          <svg-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              viewBox="0 0 20 20"-->
    <!--              fill="currentColor"-->
    <!--              class="h-5 w-5">-->
    <!--            <path-->
    <!--                fill-rule="evenodd"-->
    <!--                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"-->
    <!--                clip-rule="evenodd"/>-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--        <hr style="background-color: black"/>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <hr style="background-color: black"/>-->
    <!--        <div class="timeline-middle">-->
    <!--          <svg-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              viewBox="0 0 20 20"-->
    <!--              fill="currentColor"-->
    <!--              class="h-5 w-5">-->
    <!--            <path-->
    <!--                fill-rule="evenodd"-->
    <!--                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"-->
    <!--                clip-rule="evenodd"/>-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--        <div class="timeline-end timeline-box">iPhone</div>-->
    <!--        <hr style="background-color: black"/>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <hr style="background-color: black"/>-->
    <!--        <div class="timeline-start timeline-box">Apple Watch</div>-->
    <!--        <div class="timeline-middle">-->
    <!--          <svg-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              viewBox="0 0 20 20"-->
    <!--              fill="currentColor"-->
    <!--              class="h-5 w-5">-->
    <!--            <path-->
    <!--                fill-rule="evenodd"-->
    <!--                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"-->
    <!--                clip-rule="evenodd"/>-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--      </li>-->
    <!--    </ul>-->

    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
               class="h-5 w-5">>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end">

          <div class="text-lg font-black">2009</div>
          Designated as first-class contractors
        </div>
        <hr class="timeline-hr"/>
      </li>
      <li class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
        <hr class="timeline-hr"/>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
               class="h-5 w-5">>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>

        </div>
        <div class="timeline-end mb-10">

          <div class="text-lg font-black">2010</div>
          Certified for compliance with GOST R ISO 9001-2008
          (ISO 9001:2008)
        </div>
        <hr class="timeline-hr"/>
      </li>
      <li class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
        <hr style="background-color: black"/>
        <div class="timeline-middle">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
               class="h-5 w-5">>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end">

          <div class="text-lg font-black">2011</div>
          The PEOPLE INVESTOR 2011 Award from the Russian Managers Association for the “Outstanding Regional Project
          of Social Importance,” recognizing our contribution to economic growth and social development in the Tula
          region
        </div>
        <hr class="timeline-hr"/>
      </li>
      <li class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
        <hr class="timeline-hr"/>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
               class="h-5 w-5">>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
        </div>
        <div class="timeline-end mb-10">

          <div class="text-lg font-black">2013</div>
          Agreement between Pibiviesse, Italian manufacturer of engineering valves and components, a division of CIRCOR,
          US concern and Gazstroydetal
        </div>
        <hr class="timeline-hr"/>
      </li>
      <li class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
        <hr class="timeline-hr"/>
        <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
               class="h-5 w-5">>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end">

          <div class="text-lg font-black">2015</div>
          Participation in the 2nd International Fair & Conference in Missan Governorate, Iraq
        </div>
        <hr class="timeline-hr"/>
      </li>
      <li class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
        <hr class="timeline-hr"/>
        <div class="timeline-middle">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
               class="h-5 w-5">>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
        </div>
        <div class="timeline-end mb-10">

          <div class="text-lg font-black">2022</div>
          Climatech – As a sister company, Climatech collaborates with us to enhance our ability to provide
          comprehensive solutions for heating, ventilation, and air conditioning
        </div>
        <hr class="timeline-hr"/>
      </li>
      <li class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
        <hr class="timeline-hr"/>
        <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
               class="h-5 w-5">>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end">

          <div class="text-lg font-black">2024</div>
          Acquired the franchise for Patchi and established the supply and installation of Patchi’s MEP supply and
          installation
        </div>

      </li>

    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.collapse-title {
  cursor: pointer;
}

.timeline-hr {
  background-color: black;
  transition: background-color 0.3s ease-in-out; /* Smooth transition */


}

li:hover .timeline-hr {
  background-color: #E62D18;

}

</style>
