export const FormContainerType = {
    NONE: 'NONE',
    INSET: 'INSET',
} as const

export type FormContainerType = (typeof FormContainerType)[keyof typeof FormContainerType]
