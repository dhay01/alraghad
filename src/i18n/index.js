import { createI18n } from 'vue-i18n'
import en from './en.json'
import ar from './ar.json'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../includes/firebase'

const messages = {
  en: { ...en },
  ar: { ...ar },
}

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})

// Load translations from Firestore and merge into i18n
export async function loadTranslations() {
  const querySnapshot = await getDocs(collection(db, 'translations'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    // Expecting: { key: 'home.hero.description', en: '...', ar: '...' }
    if (data.key && data.en && data.ar) {
      messages.en[data.key] = data.en;
      messages.ar[data.key] = data.ar;
    }
  });
  i18n.global.setLocaleMessage('en', messages.en);
  i18n.global.setLocaleMessage('ar', messages.ar);
}

export default i18n 