export interface SocialButtonColor {
    background: {
        base: string
        hover: string
    }
    border: {
        base: string
        hover: string
    }
    text: {
        base: string
        hover: string
    }
}

export const socialButtonColor: SocialButtonColor = {
    background: {
        base: '',
        hover: '',
    },
    border: {
        base: '',
        hover: '',
    },
    text: {
        base: '',
        hover: '',
    },
} as const
