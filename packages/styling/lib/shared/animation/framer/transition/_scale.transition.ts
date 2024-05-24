import { Transition } from 'framer-motion'

export interface FramerScaleTransition {
    primary: Transition
}

export const scaleTransition: FramerScaleTransition = {
    primary: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        duration: 0.4,
    },
} as const
