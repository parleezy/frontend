import { forwardRef } from 'react'

// Types
import { OptionInterface } from '@/components/form/atoms'

// Components
import { SearchableDesktopSelection } from '../SearchableDesktopSelection'
import { SearchableMobileSelection } from '../SearchableMobileSelection'

// Hooks
import { useWindowSize } from '@/hooks/index'

export interface SearchableSelectionProps {
    option?: OptionInterface | null
}

export const SearchableSelection = forwardRef<HTMLDivElement, SearchableSelectionProps>(function Base(
    { ...rest },
    ref,
) {
    const screen = useWindowSize()

    const isMobile = (): boolean => screen?.width < 768

    return (
        <>{isMobile() ? <SearchableMobileSelection {...rest} /> : <SearchableDesktopSelection {...rest} ref={ref} />}</>
    )
})
