export interface Width {
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
}

export const width: Width = {
    xxs: '20rem', // 320px
    xs: '24rem', // 384px
    sm: '30rem', // 480px
    md: '35rem', // 560px
    lg: '40rem', // 640px
    xl: '48rem', // 768px
    xl2: '64rem', // 1024px
    xl3: '80rem', // 1280px
    xl4: '90rem', // 1440px
    xl5: '100rem', // 1600px
    xl6: '120rem', // 1920px
} as const
