import { PropsWithChildren, forwardRef, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

// Styling
import { Layout } from './SearchableSelectDesktopDropdown.styled'

// Components
import { Portal } from '@/components/common/atoms'
import { OptionList } from '@/components/form/atoms'

// Types
import { KeyPressType } from '@/types/index'

// Hooks
import { useDetectOutsideClick, useKeyPress } from '@/hooks/index'

// Context
import { useSearchableSelectContext } from '@/form/molecules/Selects/SearchableSelect/provider'

export const SearchableSelectDesktopDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const { dropdown, refs } = useSearchableSelectContext()

    const portalRef = useRef<HTMLDivElement>(null)

    useKeyPress(KeyPressType.Escape, dropdown.close)
    useDetectOutsideClick(portalRef, dropdown.close, refs.headerRef)

    return (
        <AnimatePresence>
            {dropdown.active && (
                <Portal ref={portalRef}>
                    <Layout.Root {...rest} ref={ref} $below={dropdown.below} $coordinates={dropdown.coordinates}>
                        <OptionList>{children}</OptionList>
                    </Layout.Root>
                </Portal>
            )}
        </AnimatePresence>
    )
})
