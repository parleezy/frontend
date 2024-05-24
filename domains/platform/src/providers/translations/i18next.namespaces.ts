export const i18Namespace = {
    COMPONENTS_PRELAUNCH_HEADER: 'components/prelaunch-header',
} as const

export type i18Namespace = (typeof i18Namespace)[keyof typeof i18Namespace]
