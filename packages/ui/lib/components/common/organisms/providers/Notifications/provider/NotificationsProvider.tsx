import { AnimatePresence } from 'framer-motion'
import { Fragment, PropsWithChildren, cloneElement, useState } from 'react'

import { NotificationInterface } from '../types/Notification.interface'
import { NotificationsContext } from './NotificationsContext.context'

function useNotifications() {
    const [notifications, setNotifications] = useState<NotificationInterface[]>([])

    const add = (notification: NotificationInterface) => {
        setNotifications((previous) => [...previous, notification])
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
    const { notifications, ...rest } = useNotifications()

    console.warn(notifications.length)

    return (
        <NotificationsContext.Provider value={{ ...rest }}>
            {children}
            <AnimatePresence>
                {notifications.map((notification) => (
                    <Fragment key={notification.id}>
                        {cloneElement(notification.element, { key: notification.id })}
                    </Fragment>
                ))}
            </AnimatePresence>
        </NotificationsContext.Provider>
    )
}
