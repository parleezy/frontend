import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './SelectInner.styled'

// Components
import { SelectHeader } from '../SelectHeader'
import { SelectDropdown } from '../SelectDropdown'

export const SelectInner = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <SelectHeader />
            <SelectDropdown>{children}</SelectDropdown>
        </Layout.Root>
    )
})
