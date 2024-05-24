import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './MultiSelectInner.styled'

// Components
import { MultiSelectHeader } from '../MultiSelectHeader'
import { MultiSelectDropdown } from '../MultiSelectDropdown'
import { useMultiSelectContext } from '../../provider'

export const MultiSelectInner = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const { refs } = useMultiSelectContext()

    return (
        <Layout.Root {...rest} ref={ref}>
            <MultiSelectHeader ref={refs.headerRef} />
            <MultiSelectDropdown>{children}</MultiSelectDropdown>
        </Layout.Root>
    )
})
