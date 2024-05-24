import { ThemeInterface } from '@parleezy/styling'

// Types
import { BadgeColorType, BadgeSizeType } from '@/types/components'

export class BadgeStyles {
    public color(color: BadgeColorType, theme: ThemeInterface): string {
        return `
            background: ${theme.component.badge.color[color].background};
            border: 1px solid ${theme.component.badge.color[color].border};
            color: ${theme.component.badge.color[color].text};
        `
    }

    public size(size: BadgeSizeType, theme: ThemeInterface): string {
        switch (size) {
            case BadgeSizeType.SM:
                return `
                    padding: ${theme.layout.spacing.xxs} ${theme.layout.spacing.md};
                    font-size: ${theme.typography.body.size.xs};
                    line-height: ${theme.typography.body.height.xs};
                    font-weight: ${theme.typography.font.weight.medium};
                `
            case BadgeSizeType.MD:
                return `
                    padding: ${theme.layout.spacing.xxs} 10px;
                    font-size: ${theme.typography.body.size.sm};
                    line-height: ${theme.typography.body.height.sm};
                    font-weight: ${theme.typography.font.weight.medium};
                `
            case BadgeSizeType.LG:
                return `
                    padding: ${theme.layout.spacing.xs} ${theme.layout.spacing.lg};
                    font-size: ${theme.typography.body.size.sm};
                    line-height: ${theme.typography.body.height.sm};
                    font-weight: ${theme.typography.font.weight.medium};
                `
            default:
                return ``
        }
    }
}
