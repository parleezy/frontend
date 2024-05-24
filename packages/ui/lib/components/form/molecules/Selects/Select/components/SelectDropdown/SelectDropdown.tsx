import { PropsWithChildren, forwardRef } from 'react'

// Hooks
import { useWindowSize } from '@/hooks/useWindowSize'

// Components
import { SelectMobileDropdown } from './SelectMobileDropdown'
import { SelectDesktopDropdown } from './SelectDesktopDropdown'

export const SelectDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base({ children, ...rest }, ref) {
    const screen = useWindowSize()

    const isMobile = (): boolean => screen?.width < 768

    return (
        <>
            {isMobile() ? (
                <SelectMobileDropdown {...rest} ref={ref}>
                    {children}
                </SelectMobileDropdown>
            ) : (
                <SelectDesktopDropdown {...rest} ref={ref}>
                    {children}
                </SelectDesktopDropdown>
            )}
        </>
    )
})
