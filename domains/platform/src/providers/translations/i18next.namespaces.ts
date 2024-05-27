export const i18Namespace = {
    COMPONENTS_LOGIN_FORM: 'components/login-form',
    COMPONENTS_NEWSLETTER_FORM: 'components/newsletter-form',
    COMPONENTS_PRELAUNCH_HEADER: 'components/prelaunch-header',
    PAGES_LOGIN: 'pages/login',
    PAGES_NOT_FOUND: 'pages/not-found',
} as const

export type i18Namespace = (typeof i18Namespace)[keyof typeof i18Namespace]
