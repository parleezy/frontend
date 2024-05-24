export const SocialButtonColorType = {
    BRAND: 'BRAND',
    DEFAULT: 'DEFAULT',
} as const

export type SocialButtonColorType = (typeof SocialButtonColorType)[keyof typeof SocialButtonColorType]
