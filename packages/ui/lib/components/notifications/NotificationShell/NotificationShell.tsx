import { PropsWithChildren } from 'react'

// Component
import { NotificationShellInner } from './NotificationShellInner'

// Provider
import { NotificationShellProvider } from './provider'

export function NotificationShell({ children }: PropsWithChildren) {
    return (
        <NotificationShellProvider>
            <NotificationShellInner>{children}</NotificationShellInner>
        </NotificationShellProvider>
    )
}
