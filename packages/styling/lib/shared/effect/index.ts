import type { Blur } from './_blur'
import type { Shadow } from './_shadow'

import { blur } from './_blur'
import { shadow } from './_shadow'

export interface Effect {
    blur: Blur
    shadow: Shadow
}

export const effect: Effect = {
    blur,
    shadow,
} as const

export type { Blur, Shadow }
