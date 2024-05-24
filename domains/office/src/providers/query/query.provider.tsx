import { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Client
import { queryClient } from './query.client'

export function Provider({ children }: PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {import.meta.env.MODE !== 'production' && <ReactQueryDevtools buttonPosition="bottom-left" />}
        </QueryClientProvider>
    )
}
