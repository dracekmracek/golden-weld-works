import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importy překladů
import translationCS from './locales/cs/translation.json';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// Zdroje pro překlady
const resources = {
  CZ: {
    translation: translationCS
  },
  GB: {
    translation: translationEN
  },
  DE: {
    translation: translationDE
  }
};

i18n
  // Detekce jazyka prohlížeče
  .use(LanguageDetector)
  // Propojení s React
  .use(initReactI18next)
  // Inicializace i18next
  .init({
    resources,
    fallbackLng: 'CZ', // Výchozí jazyk
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // Reagovat již escapuje
    },
    
    // Detekční možnosti
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n; 