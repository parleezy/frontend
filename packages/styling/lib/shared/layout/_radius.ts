export interface Radius {
    circle: string
    micro: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xl2: string
}

export const radius: Radius = {
    circle: '50%', // Circle
    micro: '0.125rem', // 2px
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.625rem', // 10px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    xl2: '1.25rem', // 20px
} as const
