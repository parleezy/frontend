import { PropsWithChildren } from 'react'

// Component
import { NotificationShellInner } from './NotificationShellInner'

// Provider
import { NotificationShellProvider } from './provider'

// Types
import { NotificationTimeType } from '@/notifications/types'

export interface NotificationShellProps {
    remove: () => void
    config?: {
        time?: NotificationTimeType
    }
}

export function NotificationShell({ remove, config, children }: PropsWithChildren<NotificationShellProps>) {
    return (
        <NotificationShellProvider config={config} remove={remove}>
            <NotificationShellInner>{children}</NotificationShellInner>
        </NotificationShellProvider>
    )
}
