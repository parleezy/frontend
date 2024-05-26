export const AnimationVariantType = {
    FADE: 'FADE',
    MOBILE: 'MOBILE',
    SCALE: 'SCALE',
    SLIDE_UP: 'SLIDE_UP',
    SLIDE_DOWN: 'SLIDE_DOWN',
    SLIDE_RIGHT: 'SLIDE_RIGHT',
    SLIDE_LEFT: 'SLIDE_LEFT',
    DRAWER_TOP: 'DRAWER_TOP',
    DRAWER_BOTTOM: 'DRAWER_BOTTOM',
    DRAWER_LEFT: 'DRAWER_LEFT',
    DRAWER_RIGHT: 'DRAWER_RIGHT',
    NOTIFICATION_RIGHT: 'NOTIFICATION_RIGHT',
} as const

export type AnimationVariantType = (typeof AnimationVariantType)[keyof typeof AnimationVariantType]
