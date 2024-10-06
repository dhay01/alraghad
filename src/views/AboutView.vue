<script setup>
import { ref } from 'vue';

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
          In 1983, our establishment commenced operations in Baghdad as an electromechanical contracting and engineering services provider. Our core focus has been on delivering superior project management and services, emphasizing robust HVAC, firefighting, power generation, and sewer treatment management practices. By emphasizing a customer-centric approach, upholding contractual obligations with integrity, striving for continuous optimization of engineering quality, and enhancing service excellence, we have achieved the status of a premier first-class contractor since 2009.
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
          At Al Raghad Group, our mission is to ensure the seamless and secure operation of projects by continuously elevating professionalism and service quality in construction and MEP contracts. Al Raghad Factory is steadfast in its pursuit of excellence, striving to deliver cutting-edge technology products through meticulous auditing, rigorous quality control, and robust assurance measures. Moreover, we are committed to providing unparalleled after-sales support, including spare parts management, backed by a proficient team specializing in preventive maintenance and repairs.
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
          Transforming visions into reality, we specialize in delivering exceptional electromechanical solutions throughout the Middle East, driven by our unwavering focus on quality, safety, and client satisfaction. We aim to emerge as a premier and dependable MEP contracting company in the Middle East and globally, consistently delivering unparalleled quality and exceeding client expectations.
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
