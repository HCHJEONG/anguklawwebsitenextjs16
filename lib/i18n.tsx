import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const jpTranslations = {};
const resources = {
  
  en_US: {
    translation:{
      "소개":"intro",
      "구성원":"members",
      "업무분야":"areas",
      "오시는 길":"contact",
      "변호사 정희찬의 서재":"Anguk Desk at Penvot.com"
    } 
  },

  ko_KR: {
    translation: {
      "소개":"소개",
      "구성원":"구성원",
      "업무분야":"업무분야",
      "오시는 길":"오시는 길",
      "변호사 정희찬의 서재":"변호사 정희찬의 서재"
    }
    
  },
//   ja_JP: {
//     translation: jpTranslations,
//   }
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({ 
  resources,
  lng: 'ko_KR',
  fallbackLng: 'en_US',
  debug: false,
  interpolation: { escapeValue: true },
  returnObjects: true,
  returnEmptyString: true,
  returnNull: true,
});

export default i18n;