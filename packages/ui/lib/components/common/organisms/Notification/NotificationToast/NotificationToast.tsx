import { PropsWithChildren, forwardRef } from 'react'
import { Layout } from './NotificationToast.styled'
import { useNotificationComponentContext } from '../NotificationComponentContext'

export const NotificationToast = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const { handleMouseDown, currentX } = useNotificationComponentContext()

    return (
        <Layout.Root ref={ref} x={currentX} onMouseDown={handleMouseDown} {...rest}>
            {children}
        </Layout.Root>
    )
})
