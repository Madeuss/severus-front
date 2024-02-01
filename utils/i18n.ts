import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationPT, translationEN, translationES } from './locales'
import detector from 'i18next-browser-languagedetector'
import { NativeModules, Platform } from 'react-native'
export type Locale = 'pt' | 'en' | 'es'

const resources = {
  pt: {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
}

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: locale.substring(0, 2),
    fallbackLng: 'en', // use en if detected lng is not available
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
