export const NotificationPositionType = {
    TOP_LEFT: 'TOP_LEFT',
    TOP_RIGHT: 'TOP_RIGHT',
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
    MOBILE: 'MOBILE',
} as const

export type NotificationPositionType = (typeof NotificationPositionType)[keyof typeof NotificationPositionType]
