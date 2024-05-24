export interface BodySize {
    xl: string
    lg: string
    md: string
    sm: string
    xs: string
}

export const bodySize: BodySize = {
    xl: '1.25rem',
    lg: '1.125rem',
    md: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
} as const
