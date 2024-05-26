import { PropsWithChildren, useState } from 'react'

// Context
import { NotificationsContext } from './NotificationsContext'

// Types
import { NotificationInterface } from '@/notifications/index'

function useNotifications() {
    const [notifications, setNotifications] = useState<NotificationInterface[]>([])

    return {
        notifications,
        add: (notification: NotificationInterface) => setNotifications((previous) => [...previous, notification]),
        remove: (id: string) =>
            setNotifications((previous) => previous.filter((notification) => notification.id !== id)),
    }
}

export function NotificationsProvider({ children }: PropsWithChildren) {
    const { add, remove } = useNotifications()

    return (
        <NotificationsContext.Provider value={{ add, remove }}>
            {children}
            {/* <AnimatePresence>
                {notifications.map((notification) => (
                    <NotificationWrapper key={notification.id} remove={() => remove(notification.id)}>
                        {notification.element(() => remove(notification.id))}
                    </NotificationWrapper>
                ))}
            </AnimatePresence> */}
        </NotificationsContext.Provider>
    )
}
