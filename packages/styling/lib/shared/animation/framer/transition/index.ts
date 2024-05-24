import type { FramerAccordionTransition } from './_accordion.transition'
import type { FramerDefaultTransition } from './_default.transition'
import type { FramerScaleTransition } from './_scale.transition'

// Values
import { accordionTransition } from './_accordion.transition'
import { defaultTransition } from './_default.transition'
import { scaleTransition } from './_scale.transition'

export interface FramerTransition {
    accordion: FramerAccordionTransition
    default: FramerDefaultTransition
    scale: FramerScaleTransition
}

export const framerTransition: FramerTransition = {
    accordion: accordionTransition,
    default: defaultTransition,
    scale: scaleTransition,
}

export type { FramerAccordionTransition, FramerDefaultTransition, FramerScaleTransition }
