// Providers
import { Provider as QueryProvider } from './query'
import { Provider as RouterProvider } from './router'
import { Provider } from './theme'
import { Provider as TranslationsProvider } from './translations'

export function Providers() {
    return (
        <Provider>
            <TranslationsProvider>
                <QueryProvider>
                    <RouterProvider />
                </QueryProvider>
            </TranslationsProvider>
        </Provider>
    )
}
