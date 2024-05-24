import { PropsWithChildren, forwardRef, useRef, useImperativeHandle } from 'react'
import { useTheme } from 'styled-components'

// Packages
import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout } from './MobileModalInner.styled'

// Hooks
import { useDetectOutsideClick, useKeyPress } from '@/hooks/index'

// Types
import { AnimationTransitionType, AnimationVariantType } from '@/types/animation'
import { KeyPressType } from '@/types/misc'

// Utils
import { Style } from '@/utils/styles'

export interface ModalInnerProps {
    close: () => void
}

export const MobileModalInner = forwardRef<HTMLDivElement, PropsWithChildren<ModalInnerProps>>(function Base(
    { close, children, ...rest },
    ref,
) {
    const theme: ThemeInterface = useTheme()
    const internalRef = useRef<HTMLDivElement>(null)

    // Animation
    const transitions = Style.Animation.Framer.transition(AnimationTransitionType.BASE_DEFAULT, theme)
    const variants = Style.Animation.Framer.variant(AnimationVariantType.MOBILE, theme)

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
