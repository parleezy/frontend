// Styling
import { i18Namespace } from './providers/Translations/i18next.namespaces'
import { TranslationResource } from './providers/translations/i18next.resources'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof i18Namespace.TRANSLATION
        resources: typeof TranslationResource
    }
}
