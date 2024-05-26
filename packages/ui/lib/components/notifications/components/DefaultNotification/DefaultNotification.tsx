import { ReactNode, forwardRef } from 'react'

// Styling
import { Layout } from './DefaultNotification.styled'

// Components
import { P } from '@/components/typography'

export interface DefaultNotificationProps {
    description: string
    leading: ReactNode
    title: string
}

export const DefaultNotification = forwardRef<HTMLDivElement, DefaultNotificationProps>(function Base(
    { description, leading, title, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            {leading && <Layout.Leading>{leading}</Layout.Leading>}

            <Layout.Content>
                <P>{title}</P>
                <P>{description}</P>
            </Layout.Content>
        </Layout.Root>
    )
})
