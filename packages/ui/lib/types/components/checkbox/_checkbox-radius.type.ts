export const CheckboxRadiusType = {
    LG: 'LG',
    MD: 'MD',
    SM: 'SM',
    NONE: 'NONE',
    FULL: 'FULL',
} as const

export type CheckboxRadiusType = (typeof CheckboxRadiusType)[keyof typeof CheckboxRadiusType]
