import { ThemeInterface } from '@thedeveloperkit/styling'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}
