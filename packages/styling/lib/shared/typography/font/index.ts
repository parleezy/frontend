// Import types
import type { FontColor } from './_color'
import type { FontFamily } from './_family'
import type { FontWeight } from './_weight'

// Import values
import { fontColor } from './_color'
import { fontFamily } from './_family'
import { fontWeight } from './_weight'

export interface Font {
    color: FontColor
    family: FontFamily
    weight: FontWeight
}

export const font: Font = {
    color: fontColor,
    family: fontFamily,
    weight: fontWeight,
}

export type { FontColor, FontFamily, FontWeight }
