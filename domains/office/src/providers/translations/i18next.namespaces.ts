export const i18Namespace = {
    COMPONENTS_LOGIN_FORM: 'components/login-form',
    PAGES_LOGIN: 'pages/login',
    PAGES_NOT_FOUND: 'pages/not-found',
} as const

export type i18Namespace = (typeof i18Namespace)[keyof typeof i18Namespace]
