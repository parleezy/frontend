import { useContext } from 'react'
import { MultiSelectContext } from './MultiSelect.context'

export function useMultiSelectContext() {
    return useContext(MultiSelectContext)
}
