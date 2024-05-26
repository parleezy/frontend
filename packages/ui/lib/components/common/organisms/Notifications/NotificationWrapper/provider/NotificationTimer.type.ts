export const NotificationTimeType = {
    STANDARD: 'STANDARD',
    IMPORTANT: 'IMPORTANT',
    ACTIONABLE: 'ACTIONABLE',
    PERSIST: 'PERSIST',
} as const

export type NotificationTimeType = (typeof NotificationTimeType)[keyof typeof NotificationTimeType]
