import type { CSSAnimation } from './css'
import type { FramerAnimation } from './framer'

import { cssAnimation } from './css'
import { framerAnimation } from './framer'

export interface Animation {
    css: CSSAnimation
    framer: FramerAnimation
}

export const animation: Animation = {
    css: cssAnimation,
    framer: framerAnimation,
}

export * from './css'
export * from './framer'

export type { CSSAnimation, FramerAnimation }
