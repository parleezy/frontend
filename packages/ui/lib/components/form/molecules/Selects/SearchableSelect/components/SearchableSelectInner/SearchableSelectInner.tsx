import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './SearchableSelectInner.styled'

// Components
import { SearchableSelectHeader } from '@/form/molecules/Selects/SearchableSelect/components/SearchableSelectHeader'
import { SearchableSelectDropdown } from '@/form/molecules/Selects/SearchableSelect/components/SearchableSelectDropdown'

export const SearchableSelectInner = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <SearchableSelectHeader />
            <SearchableSelectDropdown>{children}</SearchableSelectDropdown>
        </Layout.Root>
    )
})
