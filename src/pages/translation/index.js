import i18n from 'react-i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.ts'
import en from './tr.ts'

const resources = {
    en: { translation: en },
    tr: { translation: tr },
}

i18n.use(initReactI18next).init({
    resources,
    lng:'en',

    interpolation: {
        escapeValue: false
    }
});

export default i18n;