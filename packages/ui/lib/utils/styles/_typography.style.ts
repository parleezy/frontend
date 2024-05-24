import { ThemeInterface } from '@parleezy/styling'

// Types
import { BodySizeType, HeadingSizeType } from '@/types/typography'

export class TypographyStyles {
    get Body() {
        return {
            size: (size: BodySizeType, theme: ThemeInterface): string => {
                switch (size) {
                    case BodySizeType.XL:
                        return `
                            font-size: ${theme.typography.body.size.xl};
                            line-height: ${theme.typography.body.height.xl};
                        `
                    case BodySizeType.LG:
                        return `
                            font-size: ${theme.typography.body.size.lg};
                            line-height: ${theme.typography.body.height.lg};
                        `
                    case BodySizeType.MD:
                        return `
                            font-size: ${theme.typography.body.size.md};
                            line-height: ${theme.typography.body.height.md};
                        `
                    case BodySizeType.SM:
                        return `
                            font-size: ${theme.typography.body.size.sm};
                            line-height: ${theme.typography.body.height.sm};
                        `
                    case BodySizeType.XS:
                        return `
                            font-size: ${theme.typography.body.size.xs};
                            line-height: ${theme.typography.body.height.xs};
                        `
                    case BodySizeType.INHERIT:
                    default:
                        return `
                            font-size: inherit;
                            line-height: inherit;
                        `
                }
            },
        }
    }

    get Heading() {
        return {
            size: (size: HeadingSizeType, theme: ThemeInterface): string => {
                switch (size) {
                    case HeadingSizeType.XL2:
                        return `
                            font-size: ${theme.typography.heading.size.xl2};
                            line-height: ${theme.typography.heading.height.xl2};
                            letter-spacing: ${theme.typography.heading.tracking.xl2};
                        `
                    case HeadingSizeType.XL:
                        return `
                            font-size: ${theme.typography.heading.size.xl};
                            line-height: ${theme.typography.heading.height.xl};
                            letter-spacing: ${theme.typography.heading.tracking.xl};
                        `
                    case HeadingSizeType.LG:
                        return `
                            font-size: ${theme.typography.heading.size.lg};
                            line-height: ${theme.typography.heading.height.lg};
                            letter-spacing: ${theme.typography.heading.tracking.lg};
                        `
                    case HeadingSizeType.MD:
                        return `
                            font-size: ${theme.typography.heading.size.md};
                            line-height: ${theme.typography.heading.height.md};
                            letter-spacing: ${theme.typography.heading.tracking.md};
                        `
                    case HeadingSizeType.SM:
                        return `
                            font-size: ${theme.typography.heading.size.sm};
                            line-height: ${theme.typography.heading.height.sm};
                            letter-spacing: ${theme.typography.heading.tracking.sm};
                        `
                    case HeadingSizeType.XS:
                        return `
                            font-size: ${theme.typography.heading.size.xs};
                            line-height: ${theme.typography.heading.height.xs};
                            letter-spacing: ${theme.typography.heading.tracking.xs};
                        `
                    case HeadingSizeType.INHERIT:
                    default:
                        return `
                            font-size: inherit;
                            line-height: inherit;
                            letter-spacing: inherit;
                        `
                }
            },
        }
    }
}
