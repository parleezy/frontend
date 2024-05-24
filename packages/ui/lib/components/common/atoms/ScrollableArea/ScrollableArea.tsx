import { PropsWithChildren, forwardRef } from 'react'

import { Layout } from './ScrollableArea.styled'

export const ScrollableArea = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    return (
        <Layout.Root {...rest} ref={ref}>
            {children}
        </Layout.Root>
    )
})
