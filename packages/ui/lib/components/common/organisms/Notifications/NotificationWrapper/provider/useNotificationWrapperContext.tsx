import { useContext } from 'react'
import { NotificationWrapperContext } from './NotificationWrapperContext.context'

export function useNotificationWrapperContext() {
    return useContext(NotificationWrapperContext)
}
