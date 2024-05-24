import { Color, color } from '@/shared'

// Colors
import { borderColor } from './_border'
import { backgroundColor } from './_background'

export const darkColor: Color = {
    ...color,
    background: backgroundColor,
    border: borderColor,
}
