export const BadgeSizeType = {
    LG: 'LG',
    MD: 'MD',
    SM: 'SM',
} as const

export type BadgeSizeType = (typeof BadgeSizeType)[keyof typeof BadgeSizeType]
