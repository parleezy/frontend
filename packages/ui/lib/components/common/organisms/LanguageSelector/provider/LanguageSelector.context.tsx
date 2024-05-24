import { createContext } from 'react'

// Types
import { LanguageSelectorInterface } from './LanguageSelector.interface'

export const LanguageSelectorContext = createContext<LanguageSelectorInterface>({
    active: false,
    close: () => null,
    open: () => null,
})
