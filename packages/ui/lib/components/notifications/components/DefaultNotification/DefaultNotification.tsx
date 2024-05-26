import { ReactNode, forwardRef } from 'react'

// Styling
import { Layout } from './DefaultNotification.styled'

// Components
import { P } from '@/components/typography'
import { CloseButton } from '@/components/common'

export interface DefaultNotificationProps {
    description: string
    leading?: ReactNode
    title: string
    remove?: () => void
}

export const DefaultNotification = forwardRef<HTMLDivElement, DefaultNotificationProps>(function Base(
    { description, leading, title, remove, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            {leading && <Layout.Leading>{leading}</Layout.Leading>}

            <Layout.Content>
                <P size="SM" weight="semibold">
                    {title}
                </P>
                <P size="SM">{description}</P>
            </Layout.Content>

            {remove && <CloseButton size="SM" onClick={remove} />}
        </Layout.Root>
    )
})
