import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

// Packages
import { Reset } from '@parleezy/styling'

export function Provider({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={{}}>
            <Reset />
            {children}
        </ThemeProvider>
    )
}
