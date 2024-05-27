import enComponentLoginForm from '../../../public/locales/en/components/login-form.json'
import enComponentsNewsletterForm from '../../../public/locales/en/components/newsletter-form.json'
import enComponentPrelaunchHeader from '../../../public/locales/en/components/prelaunch-header.json'

// Pages
import enPagesLogin from '../../../public/locales/en/pages/login.json'
import enPagesNotFound from '../../../public/locales/en/pages/not-found.json'

import { i18Namespace } from './i18next.namespaces'

export const TranslationResource = {
    [i18Namespace.COMPONENTS_LOGIN_FORM]: enComponentLoginForm,
    [i18Namespace.COMPONENTS_NEWSLETTER_FORM]: enComponentsNewsletterForm,
    [i18Namespace.COMPONENTS_PRELAUNCH_HEADER]: enComponentPrelaunchHeader,
    [i18Namespace.PAGES_LOGIN]: enPagesLogin,
    [i18Namespace.PAGES_NOT_FOUND]: enPagesNotFound,
}
