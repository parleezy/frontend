import { PropsWithChildren, forwardRef } from 'react'

// Component Provider
import { NotificationWrapperProvider } from './provider/NotificationWrapper.provider'

// Components
import { NotificationWrapperInner } from './NotificationWrapperInner'
import { NotificationTimeType } from './provider/NotificationTimer.type'

export interface NotificationWrapperProps {
    remove: () => void
    config?: {
        time?: NotificationTimeType
    }
}

export const NotificationWrapper = forwardRef<HTMLDivElement, PropsWithChildren<NotificationWrapperProps>>(
    function Base({ remove, config = {}, children, ...rest }, ref) {
        return (
            <NotificationWrapperProvider config={config} remove={remove}>
                <NotificationWrapperInner ref={ref} {...rest}>
                    {children}
                </NotificationWrapperInner>
            </NotificationWrapperProvider>
        )
    },
)
