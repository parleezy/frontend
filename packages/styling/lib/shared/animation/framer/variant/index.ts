// Import types
import type { FramerAccordionVariant } from './_accordion.variant'
import type { FramerDrawerVariant } from './_drawer.variant'
import type { FramerFadeVariant } from './_fade.variant'
import type { FramerMobileVariant } from './_mobile.variant'
import type { FramerScaleVariant } from './_scale.variant'
import type { FramerSlideAndFadeVariant } from './_slide-and-fade'

// Import values
import { accordionVariant } from './_accordion.variant'
import { drawerVariant } from './_drawer.variant'
import { fadeVariant } from './_fade.variant'
import { mobileVariant } from './_mobile.variant'
import { scaleVariant } from './_scale.variant'
import { slideAndFadeVariant } from './_slide-and-fade'

export interface FramerVariant {
    accordion: FramerAccordionVariant
    drawer: FramerDrawerVariant
    fade: FramerFadeVariant
    mobile: FramerMobileVariant
    scale: FramerScaleVariant
    slideFade: FramerSlideAndFadeVariant
}

export const framerVariant: FramerVariant = {
    accordion: accordionVariant,
    drawer: drawerVariant,
    fade: fadeVariant,
    mobile: mobileVariant,
    scale: scaleVariant,
    slideFade: slideAndFadeVariant,
}

export type {
    FramerAccordionVariant,
    FramerDrawerVariant,
    FramerFadeVariant,
    FramerMobileVariant,
    FramerScaleVariant,
    FramerSlideAndFadeVariant,
}
