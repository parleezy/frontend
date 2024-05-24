import { PropsWithChildren, forwardRef, useRef, useImperativeHandle } from 'react'
import { useTheme } from 'styled-components'

import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout } from './DesktopModalInner.styled'

// Hooks
import { useDetectOutsideClick, useKeyPress } from '@/hooks/index'

// Types
import { AnimationTransitionType, AnimationVariantType, KeyPressType } from '@/types/index'

// Utils
import { Style } from '@/utils/styles'

export interface DesktopModalInnerProps {
    transition: AnimationTransitionType
    variant: AnimationVariantType
    close: () => void
}

export const DesktopModalInner = forwardRef<HTMLDivElement, PropsWithChildren<DesktopModalInnerProps>>(function Base(
    { close, transition, variant, children, ...rest },
    ref,
) {
    const theme: ThemeInterface = useTheme()
    const internalRef = useRef<HTMLDivElement>(null)

    // Animation
    const transitions = Style.Animation.Framer.transition(transition, theme)
    const variants = Style.Animation.Framer.variant(variant, theme)

    useKeyPress(KeyPressType.Escape, close)
    useDetectOutsideClick(internalRef, close)
    useImperativeHandle(ref, () => internalRef.current!, [internalRef])

    return (
        <Layout.Root
            ref={internalRef}
            animate="visible"
            exit="exit"
            initial="hidden"
            transition={transitions}
            variants={variants}
            {...rest}
        >
            {children}
        </Layout.Root>
    )
})
