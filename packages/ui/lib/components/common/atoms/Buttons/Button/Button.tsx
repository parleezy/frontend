import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './Button.styled'

// Types
import { ButtonColorType, ButtonSizeType } from '@/types/index'

export interface ButtonProps {
    color?: ButtonColorType
    disabled?: boolean
    full?: boolean
    size?: ButtonSizeType
    type?: 'button' | 'submit'
    onClick?: () => void
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function Base(
    {
        color = ButtonColorType.PRIMARY,
        disabled = false,
        full = false,
        size = ButtonSizeType.LG,
        type = 'button',
        onClick,
        children,
        ...rest
    },
    ref,
) {
    return (
        <Layout.Root
            ref={ref}
            $color={color}
            $full={full}
            $size={size}
            color={color}
            disabled={disabled}
            type={type}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Layout.Root>
    )
})
