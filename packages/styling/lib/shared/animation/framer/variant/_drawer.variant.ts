import { Variants } from 'framer-motion'

export interface FramerDrawerVariant {
    top: Variants
    bottom: Variants
    left: Variants
    right: Variants
}

export const drawerVariant: FramerDrawerVariant = {
    top: {
        visible: { top: '0%' },
        hidden: { top: '-100%' },
        exit: { top: '-100%' },
    },
    bottom: {
        visible: { bottom: '0%' },
        hidden: { bottom: '-100%' },
        exit: { bottom: '-100%' },
    },
    left: {
        visible: { left: '0%', top: 0 },
        hidden: { left: '-100%', top: 0 },
        exit: { left: '-100%', top: 0 },
    },
    right: {
        visible: { right: '0%', top: 0 },
        hidden: { right: '-100%', top: 0 },
        exit: { right: '-100%', top: 0 },
    },
} as const
