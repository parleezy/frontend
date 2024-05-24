export const CheckboxSizeType = {
    LG: 'LG',
    MD: 'MD',
    SM: 'SM',
} as const

export type CheckboxSizeType = (typeof CheckboxSizeType)[keyof typeof CheckboxSizeType]
