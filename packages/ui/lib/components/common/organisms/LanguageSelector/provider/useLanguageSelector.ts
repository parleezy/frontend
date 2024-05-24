import { useContext } from 'react'
import { LanguageSelectorContext } from './LanguageSelector.context'

export function useLanguageSelectorContext() {
    return useContext(LanguageSelectorContext)
}
