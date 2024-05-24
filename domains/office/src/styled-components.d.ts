import { ThemeInterface } from '@parleezy/styling'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}
