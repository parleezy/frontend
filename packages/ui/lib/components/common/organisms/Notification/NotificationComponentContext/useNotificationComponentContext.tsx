import { useContext } from 'react'

// Context
import { NotificationComponentContext } from './NotificationComponentContext.context'

export function useNotificationComponentContext() {
    return useContext(NotificationComponentContext)
}
