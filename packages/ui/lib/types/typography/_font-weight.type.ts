export const FontWeightType = {
    REGULAR: 'regular',
    MEDIUM: 'medium',
    SEMIBOLD: 'semibold',
    BOLD: 'bold',
    INHERIT: 'inherit',
} as const

export type FontWeightType = (typeof FontWeightType)[keyof typeof FontWeightType]
