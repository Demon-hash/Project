import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locale/en.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { en },
        supportedLngs: ['en'],
        fallbackLng: 'en',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    });
