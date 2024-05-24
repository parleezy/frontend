import { ThemeInterface } from '@/themes/index'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}
