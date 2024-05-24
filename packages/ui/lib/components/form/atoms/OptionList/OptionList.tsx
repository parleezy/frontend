import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './OptionList.styled'

export const OptionList = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    return (
        <Layout.Root {...rest} ref={ref}>
            {children}
        </Layout.Root>
    )
})
