import { PropsWithChildren } from 'react'

// Styling
import { Layout } from './NotificationShellInner.styled'

export function NotificationShellInner({ children, ...rest }: PropsWithChildren) {
    return <Layout.Root {...rest}>{children}</Layout.Root>
}
