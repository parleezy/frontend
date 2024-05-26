import { useContext } from 'react'

// Context
import { NotificationShellContext } from './NotificationShellContext'

export function useNotificationShellContext() {
    return useContext(NotificationShellContext)
}
