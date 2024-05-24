import { animation, effect, layout } from '@/shared'

// Types
import { ThemeInterface } from '@/themes/index'

// Overrides
import { lightColor } from './color'
import { lightComponent } from './component'
import { lightTypography } from './typography'

export const lightTheme: ThemeInterface = {
    animation,
    effect,
    color: lightColor,
    component: lightComponent,
    layout,
    typography: lightTypography,
}
