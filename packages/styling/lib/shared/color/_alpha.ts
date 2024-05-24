import { Color } from '@/utils'

const BLACK = '#000000'
const WHITE = '#FFFFFF'

export interface AlphaColor {
    black: {
        10: string
        20: string
        30: string
        40: string
        50: string
        60: string
        70: string
        80: string
        90: string
    }
    white: {
        10: string
        20: string
        30: string
        40: string
        50: string
        60: string
        70: string
        80: string
        90: string
    }
}

export const alphaColor: AlphaColor = {
    black: {
        10: Color.addOpacity(BLACK, 0.1) || '',
        20: Color.addOpacity(BLACK, 0.2) || '',
        30: Color.addOpacity(BLACK, 0.3) || '',
        40: Color.addOpacity(BLACK, 0.4) || '',
        50: Color.addOpacity(BLACK, 0.5) || '',
        60: Color.addOpacity(BLACK, 0.6) || '',
        70: Color.addOpacity(BLACK, 0.7) || '',
        80: Color.addOpacity(BLACK, 0.8) || '',
        90: Color.addOpacity(BLACK, 0.9) || '',
    },
    white: {
        10: Color.addOpacity(WHITE, 0.1) || '',
        20: Color.addOpacity(WHITE, 0.2) || '',
        30: Color.addOpacity(WHITE, 0.3) || '',
        40: Color.addOpacity(WHITE, 0.4) || '',
        50: Color.addOpacity(WHITE, 0.5) || '',
        60: Color.addOpacity(WHITE, 0.6) || '',
        70: Color.addOpacity(WHITE, 0.7) || '',
        80: Color.addOpacity(WHITE, 0.8) || '',
        90: Color.addOpacity(WHITE, 0.9) || '',
    },
} as const
