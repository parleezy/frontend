import { forwardRef, useEffect, useRef } from 'react'

// Packages
import { CloseIcon, SearchLgIcon } from '@parleezy/icons'

// Styling
import { Layout } from './MultiSelectFilter.styled'
import { useMultiSelectContext } from '@/form/molecules/Selects/MultiSelect/provider'

export const MultiSelectFilter = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    const { config, dropdown, filter } = useMultiSelectContext()

    const inputRef = useRef<HTMLInputElement>(null)

    // Focus input on first render
    useEffect(() => inputRef?.current?.focus(), [])

    return (
        <Layout.Root {...rest} ref={ref} $below={dropdown.below}>
            <Layout.Icon type="button" onClick={() => inputRef.current?.focus()}>
                <SearchLgIcon size="18px" />
            </Layout.Icon>

            <Layout.Input
                ref={inputRef}
                placeholder={config.text.header.placeholder}
                type="text"
                value={filter.term}
                onChange={(e) => filter.setTerm(e.target.value)}
            />

            {filter.term.length > 0 && (
                <Layout.Clear onClick={() => filter.setTerm('')}>
                    <CloseIcon />
                </Layout.Clear>
            )}
        </Layout.Root>
    )
})
