import { PropsWithChildren } from 'react'

// Context
import { NotificationShellContext } from './NotificationShellContext'

// Hook
import { useNotificationShell } from './useNotificationShell'

// Types
import { NotificationPositionType, NotificationTimeType } from '@/notifications/types'

interface Props {
    remove: () => void
    config?: {
        position?: NotificationPositionType
        time?: NotificationTimeType
    }
}

export function NotificationShellProvider({ remove, config, children }: PropsWithChildren<Props>) {
    return (
        <NotificationShellContext.Provider value={useNotificationShell({ remove, config })}>
            {children}
        </NotificationShellContext.Provider>
    )
}
