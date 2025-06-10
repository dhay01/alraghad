<script setup lang="js">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const valuesEn = [
  {
    title: "MEP Works",
    description: "We deliver advanced electromechanical solutions for hospitals, airports, and public infrastructure, emphasizing energy efficiency and reliability. Our projects adhere to international standards, fostering lasting partnerships across the Iraqi market."
  },
  {
    title: "Water Treatment",
    description: "From potable water systems to sewage treatment plants, we excel in engineering, procurement, and construction. Our expertise also includes Reverse Osmosis systems and pump station integration."
  },
  {
    title: "Electrical Infrastructure",
    description: "We specialize in power generation, substations, and SCADA systems, providing tailored solutions for infrastructure expansion and rehabilitation. Our work ensures efficient and reliable energy distribution."
  },
];

const valuesAr = [
  {
    title: "أعمال الميكانيكا والكهرباء (MEP)",
    description: "نقدم حلولاً كهروميكانيكية متقدمة للمستشفيات والمطارات والبنية التحتية العامة، مع التركيز على كفاءة الطاقة والموثوقية. تلتزم مشاريعنا بالمعايير الدولية، مما يعزز الشراكات الدائمة في السوق العراقي."
  },
  {
    title: "معالجة المياه",
    description: "من أنظمة مياه الشرب إلى محطات معالجة الصرف الصحي، نتميز في الهندسة والمشتريات والبناء. تشمل خبرتنا أيضًا أنظمة التناضح العكسي وتكامل محطات الضخ."
  },
  {
    title: "البنية التحتية الكهربائية",
    description: "نحن متخصصون في توليد الطاقة، ومحطات التحويل، وأنظمة SCADA، ونقدم حلولاً مخصصة لتوسيع وتطوير البنية التحتية. يضمن عملنا توزيعاً فعالاً وموثوقاً للطاقة."
  },
];

const { locale } = useI18n();
const values = computed(() => (locale.value === 'ar' ? valuesAr : valuesEn));
const isRtl = computed(() => locale.value === 'ar');
</script>

<template>
  <div class="flex flex-col lg:space-y-6 xl:px-20 space-y-4">
    <div
        class="grid lg:grid-cols-3 lg:gap-8 grid-cols-2 gap-4 w-full self-center"
    >
      <div
          v-for="value in values"
          :key="value.title"
          class="flex flex-col border-l-4 hover:border-l-[#E62D18] cursor-pointer transition-all ease-in-out  p-4 text-center space-y-2"
          :dir="isRtl ? 'rtl' : 'ltr'"
      >
        <h1 :class="['md:w-50 w-50 font-bold text-xl text-primaryRed', isRtl ? 'text-right' : 'text-left']">{{ value.title }}</h1>
        <p :class="['md:w-50 w-50', isRtl ? 'text-right' : 'text-left', 'text-justify']">{{ value.description }}</p>
      </div>
    </div>
  </div>
</template>