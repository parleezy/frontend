export interface HeadingSize {
    xl2: string
    xl: string
    lg: string
    md: string
    sm: string
    xs: string
}

export const headingSize: HeadingSize = {
    xl2: '4.5rem',
    xl: '3.75rem',
    lg: '3rem',
    md: '2.25rem',
    sm: '1.875rem',
    xs: '1.5rem',
} as const
