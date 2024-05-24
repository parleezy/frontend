export const HeadingSizeType = {
    XL2: 'XL2',
    XL: 'XL',
    LG: 'LG',
    MD: 'MD',
    SM: 'SM',
    XS: 'XS',
    INHERIT: 'INHERIT',
} as const

export type HeadingSizeType = (typeof HeadingSizeType)[keyof typeof HeadingSizeType]
