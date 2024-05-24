import { Variants } from 'framer-motion'

export interface FramerAccordionVariant {
    primary: Variants
}

export const accordionVariant: FramerAccordionVariant = {
    primary: {
        visible: { height: 'auto' },
        hidden: { height: 0 },
        exit: { height: 0 },
    },
} as const
