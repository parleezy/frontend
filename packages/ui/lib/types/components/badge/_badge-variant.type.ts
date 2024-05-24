export const BadgeVariantType = {
    PILL_SOLID: 'PILL_SOLID',
    PILL_OUTLINE: 'PILL_OUTLINE',
} as const

export type BadgeVariantType = (typeof BadgeVariantType)[keyof typeof BadgeVariantType]
