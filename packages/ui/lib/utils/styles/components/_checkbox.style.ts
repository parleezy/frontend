import { ThemeInterface } from '@parleezy/styling'

// Types
import { CheckboxRadiusType, CheckboxSizeType } from '@/types/components'

export class CheckboxStyles {
    public radius(radius: CheckboxRadiusType, theme: ThemeInterface): string {
        switch (radius) {
            case CheckboxRadiusType.FULL:
                return `border-radius: ${theme.layout.radius.circle};`
            case CheckboxRadiusType.NONE:
                return `border-radius: 0;`
            case CheckboxRadiusType.LG:
                return `border-radius: ${theme.layout.radius.lg};`
            case CheckboxRadiusType.SM:
                return `border-radius: ${theme.layout.radius.xs};`
            case CheckboxRadiusType.MD:
            default:
                return `border-radius: ${theme.layout.radius.sm};`
        }
    }

    public size(size: CheckboxSizeType): string {
        switch (size) {
            case CheckboxSizeType.LG:
                return `
                    width: 26px;
                    height: 26px;
                `
            case CheckboxSizeType.SM:
                return `
                    width: 18px;
                    height: 18px;
                `
            case CheckboxSizeType.MD:
            default:
                return `
                    width: 22px;
                    height: 22px;
                `
        }
    }
}
