import { useContext } from 'react'

// Context
import { NotificationsContext } from './NotificationsContext.context'

export function useNotificationsContext() {
    return useContext(NotificationsContext)
}
