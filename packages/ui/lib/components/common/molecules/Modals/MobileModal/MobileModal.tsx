import { PropsWithChildren, forwardRef } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { Overlay, Portal } from '@/components/index'
import { MobileModalInner } from './MobileModalInner'

export interface MobileModalProps {
    active: boolean
    close: () => void
}

export const MobileModal = forwardRef<HTMLDivElement, PropsWithChildren<MobileModalProps>>(function Base(
    { active, close, children, ...rest },
    ref,
) {
    return (
        <AnimatePresence>
            {active && (
                <Portal>
                    <Overlay />
                    <MobileModalInner {...rest} ref={ref} close={close}>
                        {children}
                    </MobileModalInner>
                </Portal>
            )}
        </AnimatePresence>
    )
})
