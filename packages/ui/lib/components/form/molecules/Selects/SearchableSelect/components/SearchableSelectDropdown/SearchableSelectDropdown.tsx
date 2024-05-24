import { PropsWithChildren, forwardRef } from 'react'

// Hooks
import { useWindowSize } from '@/hooks/useWindowSize'

// Components
import { SearchableSelectMobileDropdown } from './SearchableSelectMobileDropdown'
import { SearchableSelectDesktopDropdown } from './SearchableSelectDesktopDropdown'

export const SearchableSelectDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const screen = useWindowSize()

    const isMobile = (): boolean => screen?.width < 768

    return (
        <>
            {isMobile() ? (
                <SearchableSelectMobileDropdown {...rest} ref={ref}>
                    {children}
                </SearchableSelectMobileDropdown>
            ) : (
                <SearchableSelectDesktopDropdown {...rest} ref={ref}>
                    {children}
                </SearchableSelectDesktopDropdown>
            )}
        </>
    )
})
