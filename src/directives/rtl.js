import { getCurrentInstance } from 'vue'

export default {
  mounted(el) {
    const instance = getCurrentInstance()
    if (instance) {
      const i18n = instance.appContext.app._context.provides.i18n
      if (i18n) {
        updateDirection(el, i18n.global.locale.value)
      }
    }
  },
  updated(el) {
    const instance = getCurrentInstance()
    if (instance) {
      const i18n = instance.appContext.app._context.provides.i18n
      if (i18n) {
        updateDirection(el, i18n.global.locale.value)
      }
    }
  }
}

function updateDirection(el, locale) {
  if (locale === 'ar') {
    el.setAttribute('dir', 'rtl')
    document.documentElement.setAttribute('dir', 'rtl')
    document.documentElement.setAttribute('lang', 'ar')
  } else {
    el.setAttribute('dir', 'ltr')
    document.documentElement.setAttribute('dir', 'ltr')
    document.documentElement.setAttribute('lang', 'en')
  }
} 