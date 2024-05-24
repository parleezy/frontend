import { palette } from '@/palette'
import { FontColor } from '@/shared'

export const fontColor: FontColor = {
    primary: '#101010',
    secondary: palette.grey[700],
    tertiary: palette.grey[600],
    error: palette.error[600],
    warning: palette.warning[600],
    success: palette.success[600],
    inherit: 'inherit',
} as const
