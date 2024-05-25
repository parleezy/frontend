// Context
import { PropsWithChildren } from 'react'
import { Portal } from '../../atoms'
import { NotificationComponentProvider } from './NotificationComponentContext'

// Components
import { NotificationInner } from './NotificationInner'

export function Notification({ children }: PropsWithChildren) {
    return (
        <NotificationComponentProvider>
            <Portal>
                <NotificationInner>{children}</NotificationInner>
            </Portal>
        </NotificationComponentProvider>
    )
}
