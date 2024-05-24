export const ButtonSizeType = {
    XL2: 'XL2',
    XL: 'XL',
    LG: 'LG',
    MD: 'MD',
    SM: 'SM',
} as const

export type ButtonSizeType = (typeof ButtonSizeType)[keyof typeof ButtonSizeType]
