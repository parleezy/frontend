import { forwardRef } from 'react'

// Styling
import { LanguageSelectorInner } from './LanguageSelectorInner'

// Provider
import { LanguageSelectorProvider } from './provider'

export interface LanguageSelectorProps {}

export const LanguageSelector = forwardRef<HTMLDivElement, LanguageSelectorProps>(function Base({ ...rest }, ref) {
    return (
        <LanguageSelectorProvider>
            <LanguageSelectorInner {...rest} ref={ref} />
        </LanguageSelectorProvider>
    )
})
