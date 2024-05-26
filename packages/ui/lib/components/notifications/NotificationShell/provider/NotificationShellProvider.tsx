import { PropsWithChildren } from 'react'

// Context
import { NotificationShellContext } from './NotificationShellContext'

// Hook
import { useNotificationShell } from './useNotificationShell'

export function NotificationShellProvider({ children }: PropsWithChildren) {
    return (
        <NotificationShellContext.Provider value={useNotificationShell()}>{children}</NotificationShellContext.Provider>
    )
}
