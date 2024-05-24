import { PropsWithChildren, forwardRef } from 'react'

// Components
import { MultiSelectMobileDropdown } from './MultiSelectMobileDropdown'
import { MultiSelectDesktopDropdown } from './MultiSelectDesktopDropdown'

// Hooks
import { useWindowSize } from '@/hooks/index'

export const MultiSelectDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const screen = useWindowSize()

    const isMobile = (): boolean => screen?.width < 768

    return (
        <>
            {isMobile() ? (
                <MultiSelectMobileDropdown {...rest} ref={ref}>
                    {children}
                </MultiSelectMobileDropdown>
            ) : (
                <MultiSelectDesktopDropdown {...rest} ref={ref}>
                    {children}
                </MultiSelectDesktopDropdown>
            )}
        </>
    )
})
