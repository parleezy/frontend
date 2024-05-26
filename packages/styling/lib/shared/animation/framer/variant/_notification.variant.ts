import { Variants } from 'framer-motion'

export interface FramerNotificationVariant {
    right: Variants
}

export const notificationVariant: FramerNotificationVariant = {
    right: {
        visible: { right: '20px', bottom: '20px' },
        hidden: { right: '-100%', bottom: '20px' },
        exit: { right: '-100%', bottom: '20px' },
    },
} as const
