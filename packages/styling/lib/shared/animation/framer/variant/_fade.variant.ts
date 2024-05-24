import { Variants } from 'framer-motion'

export interface FramerFadeVariant {
    primary: Variants
}

export const fadeVariant: FramerFadeVariant = {
    primary: {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        exit: { opacity: 0 },
    },
} as const
