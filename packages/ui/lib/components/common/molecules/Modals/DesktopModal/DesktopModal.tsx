import { PropsWithChildren, forwardRef } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { Overlay, Portal } from '@/components/index'
import { DesktopModalInner } from './DesktopModalInner'

// Types
import { AnimationTransitionType, AnimationVariantType } from '@/types/animation'

export interface DesktopModalProps {
    active: boolean
    transition?: AnimationTransitionType
    variant?: AnimationVariantType
    close: () => void
}

export const DesktopModal = forwardRef<HTMLDivElement, PropsWithChildren<DesktopModalProps>>(function Base(
    {
        active,
        transition = AnimationTransitionType.SCALE_DEFAULT,
        variant = AnimationVariantType.SCALE,
        close,
        children,
        ...rest
    },
    ref,
) {
    return (
        <AnimatePresence>
            {active && (
                <Portal>
                    <Overlay />
                    <DesktopModalInner ref={ref} close={close} transition={transition} variant={variant} {...rest}>
                        {children}
                    </DesktopModalInner>
                </Portal>
            )}
        </AnimatePresence>
    )
})
