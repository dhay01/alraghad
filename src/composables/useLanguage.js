import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { db } from '../includes/firebase'
import { collection, getDocs } from 'firebase/firestore'

export function useLanguage() {
  const { locale } = useI18n()
  const isLoading = ref(false)

  // Function to switch language
  const switchLanguage = (lang) => {
    locale.value = lang
    // You might want to store the language preference in localStorage
    localStorage.setItem('preferredLanguage', lang)
  }

  // Function to get translated field from Firebase document
  const getTranslatedField = (doc, field) => {
    const lang = locale.value
    return doc[`${field}_${lang}`] || doc[field] || ''
  }

  // Function to fetch and translate Firebase collection
  const fetchTranslatedCollection = async (collectionName) => {
    isLoading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      const documents = querySnapshot.docs.map(doc => {
        const data = doc.data()
        // Transform the document to use translated fields
        const translatedDoc = {}
        Object.keys(data).forEach(key => {
          if (key.endsWith('_en') || key.endsWith('_ar')) {
            const baseKey = key.split('_')[0]
            if (!translatedDoc[baseKey]) {
              translatedDoc[baseKey] = getTranslatedField(data, baseKey)
            }
          } else {
            translatedDoc[key] = data[key]
          }
        })
        return { id: doc.id, ...translatedDoc }
      })
      return documents
    } catch (error) {
      console.error('Error fetching translated collection:', error)
      return []
    } finally {
      isLoading.value = false
    }
  }

  return {
    locale,
    isLoading,
    switchLanguage,
    getTranslatedField,
    fetchTranslatedCollection
  }
} 