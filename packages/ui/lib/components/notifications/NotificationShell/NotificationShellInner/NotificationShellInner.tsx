import { PropsWithChildren } from 'react'
import { useTheme } from 'styled-components'

// Packages
import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout } from './NotificationShellInner.styled'

// Context
import { useNotificationShellContext } from '@/notifications/NotificationShell/provider'

// Utils
import { Style } from '@/utils/styles'

// Hooks
import { useWindowSize } from '@/hooks'
import { NotificationPositionType } from '@/notifications/types'

export function NotificationShellInner({ children, ...rest }: PropsWithChildren) {
    const theme: ThemeInterface = useTheme()
    const { ref, x, y, location, start } = useNotificationShellContext()

    const screen = useWindowSize()

    const transitions = Style.Animation.Framer.transition('NOTIFICATION', theme)
    const mobileVariant = Style.Animation.Framer.variant('NOTIFICATION_MOBILE', theme)

    const desktopVariant = () => {
        switch (location) {
            case NotificationPositionType.TOP_RIGHT:
                return Style.Animation.Framer.variant('NOTIFICATION_TOP_RIGHT', theme)
            case NotificationPositionType.TOP_LEFT:
                return Style.Animation.Framer.variant('NOTIFICATION_TOP_LEFT', theme)
            case NotificationPositionType.BOTTOM_LEFT:
                return Style.Animation.Framer.variant('NOTIFICATION_BOTTOM_LEFT', theme)
            default:
                return Style.Animation.Framer.variant('NOTIFICATION_BOTTOM_RIGHT', theme)
        }
    }

    return (
        <Layout.Root
            ref={ref}
            $position={screen.width > 768 ? location : 'MOBILE'}
            animate="visible"
            exit="exit"
            initial="hidden"
            style={screen.width > 768 ? { transform: `translateX(${x}px)` } : { transform: `translateY(${y}px)` }}
            transition={transitions}
            variants={screen.width > 768 ? desktopVariant() : mobileVariant}
            onMouseDown={start}
            onTouchStart={start}
            {...rest}
        >
            {children}
        </Layout.Root>
    )
}
