import { Typography, typography } from '@/shared'

// Light Color
import { fontColor } from './_font-color'

export const lightTypography: Typography = {
    ...typography,
    font: {
        ...typography.font,
        color: fontColor,
    },
}
