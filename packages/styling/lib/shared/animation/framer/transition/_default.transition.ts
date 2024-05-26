import { Transition } from 'framer-motion'

export interface FramerDefaultTransition {
    primary: Transition
    fast: Transition
    slow: Transition
    notification: {
        animate: Transition
        exit: Transition
    }
}

export const defaultTransition: FramerDefaultTransition = {
    primary: {
        type: 'spring',
        bounce: 0,
        duration: 1,
    },
    fast: {
        type: 'spring',
        bounce: 0,
        duration: 0.6,
    },
    slow: {
        type: 'spring',
        bounce: 0,
        duration: 2,
    },
    notification: {
        animate: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.6,
        },
        exit: {
            type: 'spring',
            bounce: 0,
            duration: 1.2,
        },
    },
} as const
