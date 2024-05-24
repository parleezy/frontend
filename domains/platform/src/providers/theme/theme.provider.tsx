import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import { Reset, Themes } from '@parleezy/styling'

export function Provider({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={Themes.light}>
            <Reset />
            {children}
        </ThemeProvider>
    )
}
