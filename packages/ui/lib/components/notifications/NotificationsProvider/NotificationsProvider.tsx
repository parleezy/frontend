import { PropsWithChildren } from 'react'
import { AnimatePresence } from 'framer-motion'

// Context
import { NotificationsContext } from './NotificationsContext'

// Hooks
import { useNotifications } from './useNotifications'

export function NotificationsProvider({ children }: PropsWithChildren) {
    const { notifications, add, remove } = useNotifications()

    return (
        <NotificationsContext.Provider value={{ add, remove }}>
            {children}

            <AnimatePresence>
                {notifications.map((notification) => {
                    return <div key={notification.id}>{notification.element(() => remove(notification.id))}</div>
                })}
            </AnimatePresence>
        </NotificationsContext.Provider>
    )
}
