import { PropsWithChildren, forwardRef, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { Portal } from '@/components/common/atoms'
import { OptionList } from '@/components/form/atoms'
import { MultiSelectFilter } from '../MultiSelectFilter'
import { MultiSelectToolbar } from '../MultiSelectToolbar'

// Styling
import { Layout } from './MutliSelectDesktopDropdown.styled'
import { useMultiSelectContext } from '@/form/molecules/Selects/MultiSelect/provider'

// Hooks
import { useDetectOutsideClick, useKeyPress } from '@/hooks/index'

// Types
import { KeyPressType } from '@/types/index'

export const MultiSelectDesktopDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const { dropdown, refs } = useMultiSelectContext()

    const portalRef = useRef<HTMLDivElement>(null)

    useKeyPress(KeyPressType.Escape, dropdown.close)
    useDetectOutsideClick(portalRef, dropdown.close, refs.headerRef)

    return (
        <AnimatePresence>
            {dropdown.active && (
                <Portal ref={portalRef}>
                    <Layout.Root {...rest} ref={ref} $below={dropdown.below} $coordinates={dropdown.coordinates}>
                        <MultiSelectFilter />
                        <OptionList>{children}</OptionList>
                        <MultiSelectToolbar />
                    </Layout.Root>
                </Portal>
            )}
        </AnimatePresence>
    )
})
