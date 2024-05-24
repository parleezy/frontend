import { Transition } from 'framer-motion'

export interface FramerDefaultTransition {
    primary: Transition
    fast: Transition
    slow: Transition
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
} as const
