import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './Notification.styled'

export const Notification = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    return (
        <Layout.Root ref={ref} {...rest}>
            {children}
        </Layout.Root>
    )
})
