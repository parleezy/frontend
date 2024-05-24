import { forwardRef } from 'react'

// Styling
import { Layout } from './EmptyState.styled'

// Components
import { H3, P } from '@/typography/index'

export interface EmptyStateProps {
    text?: string
    title?: string
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(function Base(
    {
        text = "We couldn't find any matches for your search term. Please try a different keyword.",
        title = 'No Results Found',
        ...rest
    },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <H3 size="XS">{title}</H3>
            <P color="tertiary" size="SM">
                {text}
            </P>
        </Layout.Root>
    )
})
