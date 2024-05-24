export const ButtonVariantType = {
    ICON: 'ICON',
    DEFAULT: 'DEFAULT',
} as const

export type ButtonVariantType = (typeof ButtonVariantType)[keyof typeof ButtonVariantType]
