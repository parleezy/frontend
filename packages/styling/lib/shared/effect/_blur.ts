export interface Blur {
    sm: string
    md: string
    lg: string
    xl: string
}

export const blur: Blur = {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
} as const
