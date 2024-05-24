import { createContext } from 'react'

// Interface
import { SearchableSelectInterface } from './SearchableSelect.interface'

export const SearchableSelectContext = createContext<SearchableSelectInterface>({
    config: {
        text: {
            header: {
                placeholder: 'Please choose an option.',
            },
        },
    },
    data: {
        clear: () => null,
        selected: null,
    },
    dropdown: {
        active: false,
        below: false,
        coordinates: null,
        close: () => null,
        open: () => null,
    },
    filter: {
        term: '',
        setTerm: () => null,
    },
    refs: {
        headerRef: { current: null },
        inputRef: { current: null },
    },
})
