import { ReactElement, forwardRef } from 'react'

// Styling
import { Layout, Text } from './ContentItem.styled'

export interface ContentItemContentProps {
    icon?: ReactElement
    title: string
    text: string
}

export interface ContentItemProps {
    config?: {
        center?: boolean
        orientation?: 'column' | 'row'
    }
    content: ContentItemContentProps
}

export const ContentItem = forwardRef<HTMLDivElement, ContentItemProps>(function Base(
    { config = {}, content, ...rest },
    ref,
) {
    const { center = false, orientation = 'column' } = config

    return (
        <Layout.Root {...rest} ref={ref} $center={center} $orientation={orientation}>
            {content.icon && <Layout.Icon>{content.icon}</Layout.Icon>}

            <Layout.Content>
                <Text.Title>{content.title}</Text.Title>
                <Text.Supporting color="secondary">{content.text}</Text.Supporting>
            </Layout.Content>
        </Layout.Root>
    )
})
