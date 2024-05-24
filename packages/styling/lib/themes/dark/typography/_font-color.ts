import { palette } from '@/palette'
import { FontColor } from '@/shared'

export const fontColor: FontColor = {
    primary: '#EFEFEF',
    secondary: '#B8AB98',
    tertiary: '#CBBFAB',
    error: palette.error[600],
    warning: palette.warning[600],
    success: palette.success[600],
    inherit: 'inherit',
} as const
