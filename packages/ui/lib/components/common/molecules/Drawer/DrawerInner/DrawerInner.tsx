import { PropsWithChildren, forwardRef, useRef, useImperativeHandle } from 'react'
import { useTheme } from 'styled-components'

// Quiz
import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout } from './DrawerInner.styled'

// Hooks
import { useKeyPress, useDetectOutsideClick } from '@/hooks/index'

// Types
import { AnimationTransitionType, AnimationVariantType, KeyPressType } from '@/types/index'

// Utils
import { Style } from '@/utils/styles'

export interface DrawerInnerProps {
    close: () => void
    transition: AnimationTransitionType
    variant: AnimationVariantType
}

export const DrawerInner = forwardRef<HTMLDivElement, PropsWithChildren<DrawerInnerProps>>(function Base(
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
