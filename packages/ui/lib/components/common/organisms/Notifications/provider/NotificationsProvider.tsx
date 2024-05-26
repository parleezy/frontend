import { AnimatePresence } from 'framer-motion'
import { PropsWithChildren, useState } from 'react'

import { NotificationInterface } from '../types/Notification.interface'
import { NotificationsContext } from './NotificationsContext.context'
import { NotificationWrapper } from '../NotificationWrapper'

function useNotifications() {
    const [notifications, setNotifications] = useState<NotificationInterface[]>([])

    const add = (notification: Omit<NotificationInterface, 'remove'>) => {
        setNotifications((previous) => [...previous, { ...notification, remove: () => remove(notification.id) }])
    }

    const remove = (id: string) => {
        setNotifications((previous) => previous.filter((notification) => notification.id !== id))
    }

    return {
        notifications,
        add,
        remove,
    }
}

export function NotificationsProvider({ children }: PropsWithChildren) {
    const { notifications, add, remove } = useNotifications()

    console.warn(notifications.length)

    return (
        <NotificationsContext.Provider value={{ add, remove }}>
            {children}
            <AnimatePresence>
                {notifications.map((notification) => (
                    <NotificationWrapper key={notification.id} remove={() => remove(notification.id)}>
                        {notification.element(() => remove(notification.id))}
                    </NotificationWrapper>
                ))}
            </AnimatePresence>
        </NotificationsContext.Provider>
    )
}
