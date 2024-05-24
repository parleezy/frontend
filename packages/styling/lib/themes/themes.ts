import { ThemeInterface } from './theme.interface'
import { ThemeKeys } from './theme.keys'

// Themes
import { darkTheme } from './dark'
import { lightTheme } from './light'

export const Themes: { [K in ThemeKeys]: ThemeInterface } = {
    light: lightTheme,
    dark: darkTheme,
}
