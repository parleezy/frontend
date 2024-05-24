export const SocialButtonBrandType = {
    APPLE: 'APPLE',
    FACEBOOK: 'FACEBOOK',
    GOOGLE: 'GOOGLE',
    X: 'X',
} as const

export type SocialButtonBrandType = (typeof SocialButtonBrandType)[keyof typeof SocialButtonBrandType]
