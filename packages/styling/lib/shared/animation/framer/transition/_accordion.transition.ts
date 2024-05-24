import { Transition } from 'framer-motion'

export interface FramerAccordionTransition {
    primary: Transition
}

export const accordionTransition: FramerAccordionTransition = {
    primary: {
        type: 'ease',
        ease: [0.04, 0.62, 0.23, 0.98],
        duration: 0.25,
    },
} as const
