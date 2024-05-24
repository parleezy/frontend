import { forwardRef } from 'react'
import { useTheme } from 'styled-components'

// Packages
import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout } from './Overlay.styled'

// Hooks
import { useLockedBodyScroll } from '@/hooks/useLockedBodyScroll'

export const Overlay = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    const theme: ThemeInterface = useTheme()

    useLockedBodyScroll()

    return (
        <Layout.Root
            animate="visible"
            exit="exit"
            initial="hidden"
            transition={theme.animation.framer.transition.default.fast}
            variants={theme.animation.framer.variant.fade.primary}
            {...rest}
            ref={ref}
        />
    )
})
