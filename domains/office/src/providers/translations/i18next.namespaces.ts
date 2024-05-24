export const i18Namespace = {
    TRANSLATION: 'translation',
} as const

export type i18Namespace = (typeof i18Namespace)[keyof typeof i18Namespace]
