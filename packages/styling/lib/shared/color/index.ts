import type { AlphaColor } from './_alpha'
import type { BackgroundColor } from './_background'
import type { BorderColor } from './_border'
import type { BrandColor } from './_brand'
import type { SocialColor } from './social'

// Values
import { alphaColor } from './_alpha'
import { backgroundColor } from './_background'
import { borderColor } from './_border'
import { brandColor } from './_brand'
import { socialColor } from './social'

export interface Color {
    alpha: AlphaColor
    background: BackgroundColor
    border: BorderColor
    brand: BrandColor
    social: SocialColor
}

export const color: Color = {
    alpha: alphaColor,
    background: backgroundColor,
    border: borderColor,
    brand: brandColor,
    social: socialColor,
} as const

export type { AlphaColor, BackgroundColor, BorderColor, BrandColor, SocialColor }
