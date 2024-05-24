import styled from 'styled-components'

// Types
import { ButtonVariantType, SocialButtonBrandType, SocialButtonColorType } from '@/types/components'
import { Style } from '@/utils/styles'

interface Props {
    $color: SocialButtonColorType
    $brand: SocialButtonBrandType
    $full: boolean
    $variant: ButtonVariantType
}

export const Root = styled.button<Props>`
    // Layout
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $full }) => ($full ? '100%' : 'auto')};
    gap: ${({ theme }) => theme.layout.spacing.lg};
    padding: 10px ${({ theme }) => theme.layout.spacing.xl};

    // General
    border-radius: ${({ theme }) => theme.layout.radius.md};
    box-shadow: ${({ theme }) => theme.effect.shadow.xs};
    font-weight: ${({ theme }) => theme.typography.font.weight.semibold};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    // Styles
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.layout.radius.md};
    box-shadow: ${({ theme }) => theme.effect.shadow.xs};

    // Font
    font-size: ${({ theme }) => theme.typography.body.size.md};
    font-weight: ${({ theme }) => theme.typography.font.weight.semibold};
    line-height: ${({ theme }) => theme.typography.body.height.md};

    // Color
    background: ${({ theme }) => theme.component.social_button.color.background.base};
    border: 1px solid ${({ theme }) => theme.component.social_button.color.border.base};
    color: ${({ theme }) => theme.component.social_button.color.text.base};

    &:active {
        transform: scale(0.99);
    }

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.component.social_button.color.background.hover};
        border: 1px solid ${({ theme }) => theme.component.social_button.color.border.hover};
        color: ${({ theme }) => theme.component.social_button.color.text.hover};
    }

    i {
        transition: ${({ theme }) => theme.animation.css.transition.all};
        color: ${({ theme }) => theme.component.social_button.color.text.base};
    }

    svg {
        width: 24px;
    }

    // Variant
    ${({ $variant, theme }) => Style.Component.Button.Social.variant($variant, theme)}

    // Color
    ${({ $color, $brand, theme }) =>
        $color === SocialButtonColorType.BRAND && Style.Component.Button.Social.brand($brand, theme)}
`
