import type { Transition } from './_transition'

// Value
import { transition } from './_transition'

export interface CSSAnimation {
    transition: Transition
}

export const cssAnimation: CSSAnimation = {
    transition,
}

export type { Transition }
