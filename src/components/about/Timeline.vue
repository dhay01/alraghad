<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const milestonesEn = [
  {
    year: '1983',
    description: `Established in Baghdad, Iraq.\n1989: Established a Factory Specializing in HVAC System Manufacturing`
  },
  {
    year: '1990',
    description: `Commenced manufacturing air washers, air handling units, and fan coil units`
  },
  {
    year: '1991',
    description: `• Installing a central air conditioning system at Nasiriyah station\n• Pivotal milestones reached through the preparation of MEP business materials for the Amwaj Hotel\n• Implementation of cooling and elevator systems at Ibn al-Haytham Hospital`
  },
  {
    year: '1995',
    description: `• Installed cooling and ventilation systems for the Olympic swimming pool, replaced pumps for the Abu Ghraib Irrigation Project\n• Equipped seed testing devices, refrigerators, and freezers for the Abu Ghraib Seeds HQ`
  },
  {
    year: '2000',
    description: `• Replaced pumps & associated accessories at the Abu Ghraib Pumping Station\n• Replaced air washers & ventilation devices at Al-Musaib Power Station\n• Completed the HVAC system and fire suppression system for Jalal Hospital & replaced eight air handlers at Al-Kadhimiya Hosp.`
  },
  {
    year: '2004',
    description: `• Initiated operations in Amman, Jordan, catering to various Middle Eastern countries including Syria, Lebanon, and Jordan.`
  },
  {
    year: '2006',
    description: `Awarded contracts for deep piling foundation projects`
  },
  {
    year: '2009',
    description: `Designated as first-class contractors`
  },
  {
    year: '2010',
    description: `Certified for compliance with GOST R ISO 9001-2008 (ISO 9001:2008)`
  },
  {
    year: '2011',
    description: `The PEOPLE INVESTOR 2011 Award from the Russian Managers Association for the "Outstanding Regional Project of Social Importance," recognizing our contribution to economic growth and social development in the Tula region`
  },
  {
    year: '2013',
    description: `Agreement between Pibiviesse, Italian manufacturer of engineering valves and components, a division of CIRCOR, US concern and Gazstroydetal`
  },
  {
    year: '2015',
    description: `Participation in the 2nd International Fair & Conference in Missan Governorate, Iraq`
  },
  {
    year: '2022',
    description: `Climatech – As a sister company, Climatech collaborates with us to enhance our ability to provide comprehensive solutions for heating, ventilation, and air conditioning`
  },
  {
    year: '2024',
    description: `• Acquired the franchise for Patchi and established the supply and installation of Patchi's MEP supply and installation\n• collaborating with AFM switzerland Group`
  }
];

const milestonesAr = [
  {
    year: '١٩٨٣',
    description: `تأسست في بغداد، العراق.\n١٩٨٩: تأسيس مصنع متخصص في تصنيع أنظمة التكييف`
  },
  {
    year: '١٩٩٠',
    description: `بدء تصنيع أجهزة غسيل الهواء، ووحدات مناولة الهواء، ووحدات لفائف المروحة`
  },
  {
    year: '١٩٩١',
    description: `• تركيب نظام تكييف مركزي في محطة الناصرية\n• تحقيق إنجازات محورية من خلال تجهيز مواد أعمال الميكانيك والكهرباء لفندق أمواج\n• تنفيذ أنظمة التبريد والمصاعد في مستشفى ابن الهيثم`
  },
  {
    year: '١٩٩٥',
    description: `• تركيب أنظمة التبريد والتهوية للمسبح الأولمبي، واستبدال المضخات لمشروع ري أبو غريب\n• تجهيز أجهزة اختبار البذور، والثلاجات، والمجمدات لمقر بذور أبو غريب`
  },
  {
    year: '٢٠٠٠',
    description: `• استبدال المضخات والملحقات المرتبطة بها في محطة ضخ أبو غريب\n• استبدال أجهزة غسيل الهواء وأجهزة التهوية في محطة كهرباء المسيب\n• استكمال نظام التكييف ونظام إطفاء الحريق لمستشفى جلال واستبدال ثماني وحدات مناولة هواء في مستشفى الكاظمية`
  },
  {
    year: '٢٠٠٤',
    description: `• بدء العمليات في عمان، الأردن، لخدمة عدة دول في الشرق الأوسط بما في ذلك سوريا ولبنان والأردن.`
  },
  {
    year: '٢٠٠٦',
    description: `الحصول على عقود لمشاريع الأساسات العميقة`
  },
  {
    year: '٢٠٠٩',
    description: `تصنيفنا كمقاولين من الدرجة الأولى`
  },
  {
    year: '٢٠١٠',
    description: `الحصول على شهادة مطابقة GOST R ISO 9001-2008 (ISO 9001:2008)`
  },
  {
    year: '٢٠١١',
    description: `جائزة PEOPLE INVESTOR 2011 من جمعية المدراء الروس لمشروع إقليمي متميز ذي أهمية اجتماعية، تقديراً لمساهمتنا في النمو الاقتصادي والتنمية الاجتماعية في منطقة تولا`
  },
  {
    year: '٢٠١٣',
    description: `اتفاقية بين شركة Pibiviesse الإيطالية المصنعة لصمامات ومكونات الهندسة، وهي قسم من CIRCOR الأمريكية وGazstroydetal`
  },
  {
    year: '٢٠١٥',
    description: `المشاركة في المعرض والمؤتمر الدولي الثاني في محافظة ميسان، العراق`
  },
  {
    year: '٢٠٢٢',
    description: `شركة كليما تك – بصفتها شركة شقيقة، تتعاون كليما تك معنا لتعزيز قدرتنا على تقديم حلول شاملة للتدفئة والتهوية وتكييف الهواء`
  },
  {
    year: '٢٠٢٤',
    description: `• الحصول على امتياز باتشي وتأسيس توريد وتركيب أنظمة ميكانيكية وكهربائية لباتشي\n• التعاون مع مجموعة AFM السويسرية`
  }
];

const isRtl = computed(() => locale.value === 'ar');
const milestones = computed(() => (isRtl.value ? milestonesAr : milestonesEn));
</script>

<template>
  <div class="mt-24 mb-24 collapse-title text-2xl font-medium text-gray-700" :class="isRtl ? 'text-right' : 'text-left'">
    {{ isRtl ? 'الإنجازات الرئيسية' : 'Key Milestones' }}
  </div>

  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    <li v-for="(milestone, idx) in milestones" :key="idx" class="hover:text-[#E62D18]" style="transition:  0.3s ease-in-out;">
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
             class="h-5 w-5">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
        </svg>
      </div>
      <div :class="[
        idx % 2 === 0
          ? (isRtl ? 'timeline-start md:text-end' : 'timeline-start md:text-end')
          : (isRtl ? 'timeline-end md:text-start' : 'timeline-end md:text-start'),
        'mb-10']">
        <div class="text-lg font-black">{{ milestone.year }}</div>
        <span v-for="(line, lidx) in milestone.description.split('\n')" :key="lidx">{{ line }}<br/></span>
      </div>
      <hr class="timeline-hr"/>
    </li>
  </ul>
</template>

<style scoped>

.timeline-hr {
  background-color: black;
  transition: background-color 0.3s ease-in-out; /* Smooth transition */


}

li:hover .timeline-hr {
  background-color: #E62D18;

}

</style>