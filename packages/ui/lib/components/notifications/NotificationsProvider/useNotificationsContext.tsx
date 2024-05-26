import { useContext } from 'react'

// Context
import { NotificationsContext } from './NotificationsContext'

export function useNotificationsContext() {
    return useContext(NotificationsContext)
}
