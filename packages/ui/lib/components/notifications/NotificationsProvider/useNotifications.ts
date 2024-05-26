import { useState } from 'react'

// Types
import { NotificationInterface } from '@/notifications/types'

export function useNotifications() {
    const [notifications, setNotifications] = useState<NotificationInterface[]>([])

    const add = (notification: NotificationInterface) => setNotifications((previous) => [...previous, notification])

    const remove = (id: string) =>
        setNotifications((previous) => previous.filter((notification) => notification.id !== id))

    return {
        notifications,
        add,
        remove,
    }
}
