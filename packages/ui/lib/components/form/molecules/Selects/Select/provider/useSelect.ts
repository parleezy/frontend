import { useContext } from 'react'
import { SelectContext } from './Select.context'

export function useSelectContext() {
    return useContext(SelectContext)
}
