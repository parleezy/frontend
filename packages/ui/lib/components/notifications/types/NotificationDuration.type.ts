export const NotificationDurationType = {
    STANDARD: 'STANDARD',
    IMPORTANT: 'IMPORTANT',
    ACTIONABLE: 'ACTIONABLE',
    PERSIST: 'PERSIST',
} as const

export type NotificationDurationType = (typeof NotificationDurationType)[keyof typeof NotificationDurationType]
