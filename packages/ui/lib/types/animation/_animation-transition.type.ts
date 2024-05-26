export const AnimationTransitionType = {
    BASE_DEFAULT: 'BASE_DEFAULT',
    BASE_FAST: 'BASE_FAST',
    BASE_SLOW: 'BASE_SLOW',
    SCALE_DEFAULT: 'SCALE_DEFAULT',
    NOTIFICATION: 'NOTIFICATION',
} as const

export type AnimationTransitionType = (typeof AnimationTransitionType)[keyof typeof AnimationTransitionType]
