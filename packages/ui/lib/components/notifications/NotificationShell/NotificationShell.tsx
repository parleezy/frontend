import { PropsWithChildren } from 'react'

// Component
import { NotificationShellInner } from './NotificationShellInner'
import { Portal } from '@/components/common'

// Provider
import { NotificationShellProvider } from './provider'

// Types
import { NotificationPositionType, NotificationTimeType } from '@/notifications/types'

export interface NotificationShellProps {
    remove: () => void
    config?: {
        position?: NotificationPositionType
        time?: NotificationTimeType
    }
}

export function NotificationShell({ remove, config, children }: PropsWithChildren<NotificationShellProps>) {
    return (
        <NotificationShellProvider config={config} remove={remove}>
            <Portal>
                <NotificationShellInner>{children}</NotificationShellInner>
            </Portal>
        </NotificationShellProvider>
    )
}
