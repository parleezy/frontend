import { forwardRef } from 'react'

// Styling
import { Layout } from './SearchableSelectHeader.styled'
import { SearchableSelection } from './SearchableSelection'

// Context
import { useSearchableSelectContext } from '@/form/molecules/Selects/SearchableSelect/provider'

export interface SearchableSelectHeaderProps {}

export const SearchableSelectHeader = forwardRef<HTMLDivElement, SearchableSelectHeaderProps>(function Base(
    { ...rest },
    ref,
) {
    const { refs } = useSearchableSelectContext()

    return (
        <Layout.Root {...rest} ref={ref}>
            <SearchableSelection ref={refs.headerRef} />
        </Layout.Root>
    )
})
