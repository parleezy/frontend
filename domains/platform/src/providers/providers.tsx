// Providers
import { Provider as QueryProvider } from './query'
import { Provider as RouterProvider } from './router'
import { Provider as ThemeProvider } from './theme'
import { Provider as TranslationsProvider } from './translations'

export function Providers() {
    return (
        <ThemeProvider>
            <TranslationsProvider>
                <QueryProvider>
                    <RouterProvider />
                </QueryProvider>
            </TranslationsProvider>
        </ThemeProvider>
    )
}
