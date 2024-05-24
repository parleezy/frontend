export const BadgeColorType = {
    BRAND: 'brand',
    ERROR: 'error',
    GREY: 'grey',
    SUCCESS: 'success',
    WARNING: 'warning',
} as const

export type BadgeColorType = (typeof BadgeColorType)[keyof typeof BadgeColorType]
