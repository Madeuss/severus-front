import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationPT, translationEN, translationES } from './locales'
import detector from 'i18next-browser-languagedetector'
import { NativeModules, Platform } from 'react-native'

export type Locale = 'pt' | 'en' | 'es'

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN },
  es: { translation: translationES },
}

// FUNÇÃO PARA DETECTAR O IDIOMA DE FORMA SEGURA
const getDeviceLocale = (): string => {
  let locale: string | undefined

  try {
    if (Platform.OS === 'ios') {
      // No iOS, às vezes o AppleLocale é undefined e precisamos do AppleLanguages
      locale =
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
    } else if (Platform.OS === 'android') {
      locale = NativeModules.I18nManager.localeIdentifier
    }
  } catch (error) {
    console.log('Erro ao detectar locale nativo, usando padrão:', error)
  }

  // Se 'locale' for undefined (como no SSR/Node), retorna o padrão 'pt'
  return locale || 'pt-BR'
}

const currentLocale = getDeviceLocale()

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    // Usamos o currentLocale com uma proteção extra de substring
    lng: currentLocale.split(/[-_]/)[0] || 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
