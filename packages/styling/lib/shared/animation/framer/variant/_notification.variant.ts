import { Variants } from 'framer-motion'

export interface FramerNotificationVariant {
    bottom: {
        left: Variants
        right: Variants
    }
    top: {
        left: Variants
        right: Variants
    }
    mobile: Variants
}

export const notificationVariant: FramerNotificationVariant = {
    bottom: {
        left: {
            visible: { left: '20px', bottom: '20px' },
            hidden: { left: '-100%', bottom: '20px' },
            exit: { left: '-100%', bottom: '20px' },
        },
        right: {
            visible: { right: '20px', bottom: '20px' },
            hidden: { right: '-100%', bottom: '20px' },
            exit: { right: '-100%', bottom: '20px' },
        },
    },
    top: {
        left: {
            visible: { right: '20px', top: '20px' },
            hidden: { right: '-100%', top: '20px' },
            exit: { right: '-100%', top: '20px' },
        },
        right: {
            visible: { right: '20px', top: '20px' },
            hidden: { right: '-100%', top: '20px' },
            exit: { right: '-100%', top: '20spx' },
        },
    },
    mobile: {
        visible: { top: '-20px' },
        hidden: { top: '-50vh' },
        exit: { top: '-50vh' },
    },
} as const
