export const FormControlType = {
    INPUT: 'INPUT',
    INSET_INPUT: 'INSET_INPUT',
    PASSWORD_INSET_INPUT: 'PASSWORD_INSET_INPUT',
    PASSWORD_INPUT: 'PASSWORD_INPUT',
} as const

export type FormControlType = (typeof FormControlType)[keyof typeof FormControlType]
