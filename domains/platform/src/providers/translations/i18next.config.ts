import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import ReactPostprocessor from 'i18next-react-postprocessor'
import { i18Namespace } from './i18next.namespaces'

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(new ReactPostprocessor())
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en'],
        preload: ['en'],
        lowerCaseLng: true,
        debug: true,
        saveMissing: true,
        returnEmptyString: true,
        ns: Object.values(i18Namespace),
        partialBundledLanguages: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em'],
        },
        postProcess: ['reactPostprocessor'],
        missingKeyHandler: (lng, ns, key, fallbackValue) => {
            console.warn(lng, ns, key, fallbackValue)
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    })

export default i18n
