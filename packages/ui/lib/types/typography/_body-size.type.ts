export const BodySizeType = {
    XL: 'XL',
    LG: 'LG',
    MD: 'MD',
    SM: 'SM',
    XS: 'XS',
    INHERIT: 'INHERIT',
} as const

export type BodySizeType = (typeof BodySizeType)[keyof typeof BodySizeType]
