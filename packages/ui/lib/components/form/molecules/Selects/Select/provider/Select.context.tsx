import { createContext } from 'react'

// Interface
import { SelectInterface } from './Select.interface'

export const SelectContext = createContext<SelectInterface>({
    config: {
        text: {
            header: {
                placeholder: 'Please choose an option.',
            },
        },
    },
    data: {
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
    },
})
