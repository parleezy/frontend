import { useContext } from 'react'
import { SearchableSelectContext } from './SearchableSelect.context'

export function useSearchableSelectContext() {
    return useContext(SearchableSelectContext)
}
