import { Dispatch, PropsWithChildren, SetStateAction, forwardRef } from 'react'

// Types
import { OptionInterface } from '@/form/atoms'

// Provider
import { MultiSelectProvider } from './provider'

// Components
import { MultiSelectInner } from './components/MultiSelectInner/MultiSelectInner'

export interface MultiSelectProps {
    config?: {
        text?: {
            header_placeholder?: string
            filter_placeholder?: string
            toolbar_clear?: string
            toolbar_selectall?: string
        }
    }
    data: {
        selections: OptionInterface[]
        clear: () => void
        selectAll: () => void
        remove: (option: OptionInterface) => void
    }
    filter: {
        term: string
        setTerm: Dispatch<SetStateAction<string>>
    }
}

export const MultiSelect = forwardRef<HTMLDivElement, PropsWithChildren<MultiSelectProps>>(function Base(
    { config, data, filter, children, ...rest },
    ref,
) {
    return (
        <MultiSelectProvider config={config} data={data} filter={filter}>
            <MultiSelectInner {...rest} ref={ref}>
                {children}
            </MultiSelectInner>
        </MultiSelectProvider>
    )
})
