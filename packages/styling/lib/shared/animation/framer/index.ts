import type { FramerTransition } from './transition'
import type { FramerVariant } from './variant'

// Value
import { framerTransition } from './transition'
import { framerVariant } from './variant'

export interface FramerAnimation {
    transition: FramerTransition
    variant: FramerVariant
}

export const framerAnimation: FramerAnimation = {
    transition: framerTransition,
    variant: framerVariant,
} as const

export * from './transition'
export * from './variant'

export type { FramerTransition, FramerVariant }
