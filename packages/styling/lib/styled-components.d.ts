import { ThemeInterface } from '@/themes/theme.interface'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}
