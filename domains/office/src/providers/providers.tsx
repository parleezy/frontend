import { NotificationsProvider } from '@parleezy/ui'
import { AuthenticationProvider } from '@parleezy/data'

// Providers
import { Provider as QueryProvider } from './query'
import { Provider as RouterProvider } from './router'
import { Provider as ThemeProvider } from './theme'
import { Provider as TranslationsProvider } from './translations'

export function Providers() {
    return (
        <ThemeProvider>
            <NotificationsProvider>
                <AuthenticationProvider root={import.meta.env.VITE_API_ROOT}>
                    <TranslationsProvider>
                        <QueryProvider>
                            <RouterProvider />
                        </QueryProvider>
                    </TranslationsProvider>
                </AuthenticationProvider>
            </NotificationsProvider>
        </ThemeProvider>
    )
}
