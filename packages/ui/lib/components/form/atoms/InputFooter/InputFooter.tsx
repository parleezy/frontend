import { forwardRef } from 'react'

// Styling
import { Layout } from './InputFooter.styled'

// Components
import { P } from '@/typography/index'

export interface InputFooterProps {
    help?: string
    error?: string
}

export const InputFooter = forwardRef<HTMLDivElement, InputFooterProps>(function Base({ error, help, ...rest }, ref) {
    return (
        <Layout.Root {...rest} ref={ref}>
            {error ? (
                <P color="error" size="SM">
                    {error}
                </P>
            ) : (
                <P size="SM">{help}</P>
            )}
        </Layout.Root>
    )
})
