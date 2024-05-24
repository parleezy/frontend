import { createContext } from 'react'

// Interface
import { MultiSelectInterface } from './MultiSelect.interface'

export const MultiSelectContext = createContext<MultiSelectInterface>({
    config: {
        text: {
            header: {
                placeholder: 'Please choose an option.',
            },
            filter: {
                placeholder: 'Search options',
            },
            toolbar: {
                clear: 'Clear',
                selectAll: 'Select All',
            },
        },
    },
    data: {
        selections: [],
        clear: () => null,
        selectAll: () => null,
        remove: () => null,
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
