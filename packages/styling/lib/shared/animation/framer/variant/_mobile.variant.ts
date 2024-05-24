import { Variants } from 'framer-motion'

export interface FramerMobileVariant {
    primary: Variants
}

export const mobileVariant: FramerMobileVariant = {
    primary: {
        visible: { bottom: '0%', top: 'initial', opacity: 1 },
        hidden: { bottom: '-100%', top: 'initial', opacity: 1 },
        exit: { bottom: '-100%', top: 'initial', opacity: 1 },
    },
} as const
