import { PropsWithChildren } from 'react'
import { useTheme } from 'styled-components'

// Packages
import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout } from './NotificationShellInner.styled'

// Context
import { useNotificationShellContext } from '@/notifications/NotificationShell/provider'

// Utils
import { Style } from '@/utils'

export function NotificationShellInner({ children, ...rest }: PropsWithChildren) {
    const theme: ThemeInterface = useTheme()
    const { ref, x, y, handleMouseDown } = useNotificationShellContext()

    const transitions = Style.Animation.Framer.transition('BASE_FAST', theme)
    const mobileVariant = Style.Animation.Framer.variant('MOBILE', theme)

    return (
        <Layout.Root
            ref={ref}
            $x={x}
            $y={y}
            animate="visible"
            exit="exit"
            initial="hidden"
            transition={transitions}
            variants={mobileVariant}
            onMouseDown={handleMouseDown}
            {...rest}
        >
            {children}
        </Layout.Root>
    )
}

// import { PropsWithChildren, forwardRef } from 'react'
// import { useTheme } from 'styled-components'

// // Packages
// import { ThemeInterface } from '@parleezy/styling'

// // Styling
// import { Layout } from './NotificationWrapperInner.styled'

// // Utils
// import { Style } from '@/utils/styles'
// import { useNotificationWrapperContext } from './provider/useNotificationWrapperContext'
// import { useCombinedRefs } from '@/hooks/useCombinedRefs'

// export const NotificationWrapperInner = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
//     { children, ...rest },
//     forwardedRef,
// ) {
//     const theme: ThemeInterface = useTheme()
//     const { x, y, ref, handleMouseDown } = useNotificationWrapperContext()

//     // Combine the forwarded ref with the context ref
//     const combinedRef = useCombinedRefs(forwardedRef, ref)

//     // Animation
// const transitions = Style.Animation.Framer.transition('BASE_FAST', theme)
// const variants = Style.Animation.Framer.variant('NOTIFICATION_RIGHT', theme)

//     return (
//         <Layout.Root
//             ref={combinedRef}
// $x={x}
// $y={y}
// animate="visible"
// exit="exit"
// initial="hidden"
// transition={transitions}
// variants={variants}
// onMouseDown={handleMouseDown}
//             {...rest}
//         >
//             {children}
//         </Layout.Root>
//     )
// })
