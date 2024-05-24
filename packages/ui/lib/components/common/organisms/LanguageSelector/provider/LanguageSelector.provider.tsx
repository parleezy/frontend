import { PropsWithChildren, useState } from 'react'

// Context
import { LanguageSelectorContext } from './LanguageSelector.context'

function useLanguageSelector() {
    const [active, setActive] = useState<boolean>(false)

    return {
        active,
        close: () => setActive(false),
        open: () => setActive(true),
    }
}

export function LanguageSelectorProvider({ children }: PropsWithChildren) {
    return <LanguageSelectorContext.Provider value={useLanguageSelector()}>{children}</LanguageSelectorContext.Provider>
}
