import { PropsWithChildren, forwardRef } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { Overlay, Portal } from '@/components/index'
import { DrawerInner } from './DrawerInner'

// Types
import { AnimationTransitionType, AnimationVariantType } from '@/types/animation'

export interface DrawerProps {
    active: boolean
    transition?: AnimationTransitionType
    variant?: AnimationVariantType
    close: () => void
}

export const Drawer = forwardRef<HTMLDivElement, PropsWithChildren<DrawerProps>>(function Base(
    {
        active,
        transition = AnimationTransitionType.BASE_DEFAULT,
        variant = AnimationVariantType.DRAWER_LEFT,
        children,
        close,
        ...rest
    },
    ref,
) {
    return (
        <AnimatePresence>
            {active && (
                <Portal>
                    <Overlay />
                    <DrawerInner ref={ref} close={close} transition={transition} variant={variant} {...rest}>
                        {children}
                    </DrawerInner>
                </Portal>
            )}
        </AnimatePresence>
    )
})
