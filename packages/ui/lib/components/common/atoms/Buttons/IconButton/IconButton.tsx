import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './IconButton.styled'

// Types
import { ButtonColorType, ButtonSizeType } from '@/types/components'

interface Props {
    color?: ButtonColorType
    disabled?: boolean
    size?: ButtonSizeType
    type?: 'button' | 'submit'
    onClick: () => void
}

export const IconButton = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(function Base(
    { color = ButtonColorType.PRIMARY, disabled = false, size = ButtonSizeType.LG, type = 'button', children, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} $color={color} $size={size} disabled={disabled} type={type} {...rest}>
            {children}
        </Layout.Root>
    )
})
