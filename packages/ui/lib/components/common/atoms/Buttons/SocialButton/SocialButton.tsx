import { forwardRef } from 'react'

// Styling
import { Root } from './SocialButton.styled'

// Utils
import { useSocialButton } from './useSocialButton'

// Types
import { ButtonVariantType, SocialButtonBrandType, SocialButtonColorType } from '@/types/components'

export interface SocialButtonProps {
    brand: SocialButtonBrandType
    color?: SocialButtonColorType
    disabled?: boolean
    full?: boolean
    size?: string
    text?: string
    variant?: ButtonVariantType
    onClick: () => void
}

export const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(function Base(
    {
        brand,
        color = SocialButtonColorType.DEFAULT,
        disabled = false,
        full = false,
        size = '24px',
        text,
        variant = ButtonVariantType.DEFAULT,
        onClick,
        ...rest
    },
    ref,
) {
    const { icon, text: buttonText } = useSocialButton()

    return (
        <Root
            ref={ref}
            $brand={brand}
            $color={color}
            $full={full}
            $variant={variant}
            disabled={disabled}
            type="button"
            onClick={onClick}
            {...rest}
        >
            {icon(brand, size)}
            {variant !== ButtonVariantType.ICON && (text ? text : buttonText(brand))}
        </Root>
    )
})
