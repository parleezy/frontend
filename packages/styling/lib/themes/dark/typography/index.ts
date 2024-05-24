import { Typography, typography } from '@/shared'

// Dark Color
import { fontColor } from './_font-color'

export const darkTypography: Typography = {
    ...typography,
    font: {
        ...typography.font,
        color: fontColor,
    },
}
