import { animation, effect, layout } from '@/shared'

// Types
import { ThemeInterface } from '@/themes/index'

// Overrides
import { darkColor } from './color'
import { darkComponent } from './component'
import { darkTypography } from './typography'

export const darkTheme: ThemeInterface = {
    animation,
    color: darkColor,
    component: darkComponent,
    effect,
    layout,
    typography: darkTypography,
}
