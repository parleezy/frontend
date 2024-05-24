import { ThemeInterface } from '@parleezy/styling'

// Types
import {
    ButtonColorType,
    ButtonSizeType,
    ButtonVariantType,
    CloseButtonSizeType,
    SocialButtonBrandType,
} from '@/types/components'

export class ButtonStyles {
    get Close() {
        return {
            size(size: CloseButtonSizeType): string {
                switch (size) {
                    case CloseButtonSizeType.LG:
                        return `
                            width: 44px;
                            height: 44px;
                        `
                    case CloseButtonSizeType.SM:
                        return `
                            width: 36px;
                            height: 36px;
                        `
                    case CloseButtonSizeType.MD:
                    default:
                        return `
                            width: 40px;
                            height: 40px;
                        `
                }
            },
        }
    }

    get Icon() {
        return {
            size(size: ButtonSizeType, theme: ThemeInterface): string {
                switch (size) {
                    case ButtonSizeType.SM:
                        return `
                            padding: ${theme.layout.spacing.md};
                            width: 36px;
                            height: 36px;
                        `
                    case ButtonSizeType.MD:
                        return `
                            padding: 10px;
                            width: 40px;
                            height: 40px;
                        `
                    case ButtonSizeType.XL:
                        return `
                            padding: 14px;
                            width: 48px;
                            height: 48px;
                        `
                    case ButtonSizeType.XL2:
                        return `
                            padding: ${theme.layout.spacing.xl};
                            width: 56px;
                            height: 56px;
                        `
                    case ButtonSizeType.LG:
                    default:
                        return `
                            padding: ${theme.layout.spacing.lg};
                            width: 44px;
                            height: 44px;
                        `
                }
            },
        }
    }

    get Primary() {
        return {
            color(color: ButtonColorType, theme: ThemeInterface): string {
                const renderColor = (key: ButtonColorType) => {
                    return `
                        background: ${theme.component.button.color[key].background.base};
                        border: 1px solid ${theme.component.button.color[key].border.base};
                        color: ${theme.component.button.color[key].text.base};
        
                        &:active, &:hover {
                            background: ${theme.component.button.color[key].background.hover};
                            border: 1px solid ${theme.component.button.color[key].border.hover};
                            color: ${theme.component.button.color[key].text.hover};
                        }

                        ${
                            (
                                [
                                    ButtonColorType.DESTRUCTIVE_TERTIARY,
                                    ButtonColorType.TERTIARY_COLOR,
                                    ButtonColorType.TERTIARY_GREY,
                                ] as ButtonColorType[]
                            ).includes(key) &&
                            `
                            box-shadow: none;
                        `
                        }
        
                        &:disabled {
                            background: ${theme.component.button.color[key].background.disabled};
                            border: 1px solid ${theme.component.button.color[key].border.disabled};
                            color: ${theme.component.button.color[key].text.disabled};
                            cursor: not-allowed;
        
                            &:active, &:hover {
                                background: ${theme.component.button.color[key].background.disabled};
                                border: 1px solid ${theme.component.button.color[key].border.disabled};
                                color: ${theme.component.button.color[key].text.disabled};
                                transform: scale(1);
                            }
                        }
                    `
                }

                switch (color) {
                    case ButtonColorType.DESTRUCTIVE_PRIMARY:
                        return renderColor(ButtonColorType.DESTRUCTIVE_PRIMARY)
                    case ButtonColorType.DESTRUCTIVE_SECONDARY:
                        return renderColor(ButtonColorType.DESTRUCTIVE_SECONDARY)
                    case ButtonColorType.DESTRUCTIVE_TERTIARY:
                        return renderColor(ButtonColorType.DESTRUCTIVE_TERTIARY)
                    case ButtonColorType.SECONDARY_COLOR:
                        return renderColor(ButtonColorType.SECONDARY_COLOR)
                    case ButtonColorType.SECONDARY_GREY:
                        return renderColor(ButtonColorType.SECONDARY_GREY)
                    case ButtonColorType.TERTIARY_COLOR:
                        return renderColor(ButtonColorType.TERTIARY_COLOR)
                    case ButtonColorType.TERTIARY_GREY:
                        return renderColor(ButtonColorType.TERTIARY_GREY)
                    case ButtonColorType.PRIMARY:
                    default:
                        return renderColor(ButtonColorType.PRIMARY)
                }
            },
            size(size: ButtonSizeType, theme: ThemeInterface): string {
                switch (size) {
                    case ButtonSizeType.SM:
                        return `
                            font-size: ${theme.typography.body.size.sm};
                            gap: ${theme.layout.spacing.xs};
                            line-height: ${theme.typography.body.height.sm};
                            padding: ${theme.layout.spacing.md} ${theme.layout.spacing.lg};
                        `
                    case ButtonSizeType.MD:
                        return `
                            font-size: ${theme.typography.body.size.sm};
                            gap: ${theme.layout.spacing.xs};
                            line-height: ${theme.typography.body.height.sm};
                            padding: 10px 14px;
                        `
                    case ButtonSizeType.XL:
                        return `
                            font-size: ${theme.typography.body.size.md};
                            gap: ${theme.layout.spacing.sm};
                            line-height: ${theme.typography.body.height.md};
                            padding: ${theme.layout.spacing.xl} 18px;
                        `
                    case ButtonSizeType.XL2:
                        return `
                            font-size: ${theme.typography.body.size.lg};
                            gap: 10px;
                            line-height: ${theme.typography.body.height.lg};
                            padding: ${theme.layout.spacing.xl} 22px;
                        `
                    case ButtonSizeType.LG:
                    default:
                        return `
                            font-size: ${theme.typography.body.size.md};
                            gap: ${theme.layout.spacing.sm};
                            line-height: ${theme.typography.body.height.md};
                            padding: 10px ${theme.layout.spacing.xl};
                        `
                }
            },
            shadow(color: ButtonColorType, theme: ThemeInterface): string {
                switch (color) {
                    case ButtonColorType.DESTRUCTIVE_PRIMARY:
                    case ButtonColorType.DESTRUCTIVE_SECONDARY:
                    case ButtonColorType.PRIMARY:
                    case ButtonColorType.SECONDARY_COLOR:
                    case ButtonColorType.SECONDARY_GREY:
                        return `box-shadow: ${theme.effect.shadow.xs};`
                    case ButtonColorType.DESTRUCTIVE_TERTIARY:
                    case ButtonColorType.TERTIARY_COLOR:
                    case ButtonColorType.TERTIARY_GREY:
                    default:
                        return `box-shadow: none;`
                }
            },
        }
    }

    get Social() {
        return {
            brand: (brand: SocialButtonBrandType, theme: ThemeInterface): string => {
                switch (brand) {
                    case SocialButtonBrandType.APPLE:
                        return `
                            background: ${theme.color.social.apple.background.base};
                            border: 1px solid ${theme.color.social.apple.border.base};
                            color: ${theme.color.social.apple.text.base};
            
                            &:hover {
                                background: ${theme.color.social.apple.background.hover};
                                border: 1px solid ${theme.color.social.apple.border.hover};
                                color: ${theme.color.social.apple.text.hover};
                            }
                        `
                    case SocialButtonBrandType.FACEBOOK:
                        return `
                            background: ${theme.color.social.facebook.background.base};
                            border: 1px solid ${theme.color.social.facebook.border.base};
                            color: ${theme.color.social.facebook.text.base};
            
                            &:hover {
                                background: ${theme.color.social.facebook.background.hover};
                                border: 1px solid ${theme.color.social.facebook.border.hover};
                                color: ${theme.color.social.facebook.text.hover};
                            }
                        `
                    case SocialButtonBrandType.GOOGLE:
                        return `
                            background: ${theme.color.social.google.background.base};
                            border: 1px solid ${theme.color.social.google.border.base};
                            color: ${theme.color.social.google.text.base};
            
                            &:hover {
                                background: ${theme.color.social.google.background.hover};
                                border: 1px solid ${theme.color.social.google.border.hover};
                                color: ${theme.color.social.google.text.hover};
                            }
                        `
                    case SocialButtonBrandType.X:
                        return `
                            background: ${theme.color.social.x.background.base};
                            border: 1px solid ${theme.color.social.x.border.base};
                            color: ${theme.color.social.x.text.base};
            
                            &:hover {
                                background: ${theme.color.social.x.background.hover};
                                border: 1px solid ${theme.color.social.x.border.hover};
                                color: ${theme.color.social.x.text.hover};
                            }
                        `
                    default:
                        return `inherit`
                }
            },
            variant: (variant: ButtonVariantType, theme: ThemeInterface) => {
                if (variant === ButtonVariantType.ICON) {
                    return `
                        width: ${theme.layout.height.lg};
                        height: ${theme.layout.height.lg};
                        padding: 0;

                        &:active {
                            transform: scale(0.98);
                        }
                    `
                }
            },
        }
    }
}
