import { forwardRef } from 'react'

import { ChevronSelectorVerticalIcon, SearchMdIcon } from '@parleezy/icons'

// Styling
import { Layout } from './MultiSelectHeader.styled'

// Provider
import { useMultiSelectContext } from '@/form/molecules/Selects/MultiSelect/provider'

// Components
import { MultiSelectSelections } from './MultiSelectSelections'

export const MultiSelectHeader = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    const { dropdown } = useMultiSelectContext()

    return (
        <Layout.Root {...rest} ref={ref} $active={dropdown.active} $below={dropdown.below}>
            <Layout.Trigger onClick={() => (dropdown.active ? dropdown.close() : dropdown.open())}>
                <SearchMdIcon size="18px" />
            </Layout.Trigger>

            <MultiSelectSelections />

            <Layout.Trigger onClick={() => (dropdown.active ? dropdown.close() : dropdown.open())}>
                <ChevronSelectorVerticalIcon size="16px" />
            </Layout.Trigger>
        </Layout.Root>
    )
})
