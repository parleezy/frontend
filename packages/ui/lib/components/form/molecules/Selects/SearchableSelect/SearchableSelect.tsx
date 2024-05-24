import { Dispatch, PropsWithChildren, SetStateAction, forwardRef } from 'react'

// Types
import { OptionInterface } from '@/form/atoms'

// Provider
import { SearchableSelectProvider } from './provider'

// Components
import { SearchableSelectInner } from './components/SearchableSelectInner'

export interface SearchableSelectProps {
    config?: {
        text?: {
            header_placeholder?: string
        }
    }
    data: {
        selected: OptionInterface | null
        reset: () => void
    }
    filter: {
        term: string
        setTerm: Dispatch<SetStateAction<string>>
    }
}

export const SearchableSelect = forwardRef<HTMLDivElement, PropsWithChildren<SearchableSelectProps>>(function Base(
    { config, data, filter, children, ...rest },
    ref,
) {
    return (
        <SearchableSelectProvider config={config} data={data} filter={filter}>
            <SearchableSelectInner {...rest} ref={ref}>
                {children}
            </SearchableSelectInner>
        </SearchableSelectProvider>
    )
})
