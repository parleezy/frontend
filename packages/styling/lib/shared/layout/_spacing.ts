export interface Spacing {
    none: string
    xxs: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xl2: string
    xl3: string
    xl4: string
    xl5: string
    xl6: string
    xl7: string
    xl8: string
    xl9: string
    xl10: string
    xl11: string
}

export const spacing: Spacing = {
    none: '0rem', // 0
    xxs: '0.125rem', // 2px
    xs: '0.25rem', // 4px
    sm: '0.375rem', // 6px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    xl2: '1.25rem', // 20px
    xl3: '1.5rem', // 24px
    xl4: '2rem', // 32px
    xl5: '2.5rem', // 40px
    xl6: '3rem', // 48px
    xl7: '4rem', // 64px
    xl8: '5rem', // 80px
    xl9: '6rem', // 96px
    xl10: '8rem', // 128px
    xl11: '10rem', // 160px
} as const
