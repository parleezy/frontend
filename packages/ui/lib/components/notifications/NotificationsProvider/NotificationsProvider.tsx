import { PropsWithChildren } from 'react'
import { AnimatePresence } from 'framer-motion'

// Context
import { NotificationsContext } from './NotificationsContext'

// Hooks
import { useNotifications } from './useNotifications'

// Components
import { NotificationShell } from '@/notifications/NotificationShell'

export function NotificationsProvider({ children }: PropsWithChildren) {
    const { notifications, add, remove } = useNotifications()

    return (
        <NotificationsContext.Provider value={{ add, remove }}>
            {children}

            <AnimatePresence>
                {notifications.map((notification) => {
                    return (
                        <NotificationShell
                            key={notification.id}
                            remove={() => remove(notification.id)}
                            config={{
                                ...notification.config,
                            }}
                        >
                            {notification.element(() => remove(notification.id))}
                        </NotificationShell>
                    )
                })}
            </AnimatePresence>
        </NotificationsContext.Provider>
    )
}
