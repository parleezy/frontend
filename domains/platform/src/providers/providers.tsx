// Providers
import { Provider as RouterProvider } from './router'
import { Provider as ThemeProvider } from './theme'

export function Providers() {
    return (
        <ThemeProvider>
            <RouterProvider />
        </ThemeProvider>
    )
}
