import { Variants } from 'framer-motion'

export interface FramerScaleVariant {
    primary: Variants
}

export const scaleVariant: FramerScaleVariant = {
    primary: {
        visible: { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        hidden: { transform: 'translate(-50%, -50%) scale(0.75) ', opacity: 0 },
        exit: { transform: ' translate(-50%, -50%) scale(0.75)', opacity: 0 },
    },
} as const
