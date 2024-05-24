export interface Padding {
    mobile: string
    tablet: string
    desktop: string
}

export const padding: Padding = {
    mobile: '1rem', // 16px
    tablet: '1.5rem', // 24px
    desktop: '2rem', //32px
} as const
