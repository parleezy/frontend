import { PropsWithChildren } from 'react'
import { useNotificationComponentContext } from './NotificationComponentContext'

// Styling
import { Layout } from './NotificationInner.styled'

// Components
import { NotificationToast } from './NotificationToast'

export function NotificationInner({ children, ...rest }: PropsWithChildren) {
    const { ref } = useNotificationComponentContext()

    return (
        <Layout.Root {...rest}>
            <NotificationToast ref={ref}>{children}</NotificationToast>
        </Layout.Root>
    )
}
