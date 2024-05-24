import { Variants } from 'framer-motion'

export interface FramerSlideAndFadeVariant {
    up: Variants
    down: Variants
    left: Variants
    right: Variants
}

export const slideAndFadeVariant: FramerSlideAndFadeVariant = {
    up: {
        visible: { bottom: '0', opacity: 1 },
        hidden: { bottom: '100%', opacity: 0 },
        exit: { bottom: '100%', opacity: 0 },
    },
    down: {
        visible: { top: '0', opacity: 1 },
        hidden: { top: '-100%', opacity: 0 },
        exit: { top: '-100%', opacity: 0 },
    },
    left: {
        visible: { left: '0', opacity: 1 },
        hidden: { left: '-100%', opacity: 0 },
        exit: { left: '-100%', opacity: 0 },
    },
    right: {
        visible: { right: '0', opacity: 1 },
        hidden: { right: '100%', opacity: 0 },
        exit: { right: '100%', opacity: 0 },
    },
} as const
