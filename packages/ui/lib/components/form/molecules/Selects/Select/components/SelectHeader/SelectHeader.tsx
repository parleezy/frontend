import { forwardRef } from 'react'

// Styling
import { Layout } from './SelectHeader.styled'
import { Selection } from './Selection/Selection'

// Data
import { useSelectContext } from '@/components/form/molecules/Selects/Select/provider'

export interface SelectHeaderProps {}

export const SelectHeader = forwardRef<HTMLDivElement, SelectHeaderProps>(function Base({ ...rest }, ref) {
    const { refs } = useSelectContext()

    return (
        <Layout.Root {...rest} ref={ref}>
            <Selection ref={refs.headerRef} />
        </Layout.Root>
    )
})
