import { Dispatch, MutableRefObject, SetStateAction } from 'react'

// Types
import { OptionInterface } from '@/components/form/atoms'
import { ElementCoordinates } from '@/hooks/useElementCoordinates'

export interface SearchableSelectInterface {
    config: {
        text: {
            header: {
                placeholder: string
            }
        }
    }
    data: {
        clear: () => void
        selected: OptionInterface | null
    }
    dropdown: {
        active: boolean
        below: boolean
        coordinates: ElementCoordinates | null
        close: () => void
        open: () => void
    }
    filter: {
        term: string
        setTerm: Dispatch<SetStateAction<string>>
    }
    refs: {
        headerRef: MutableRefObject<HTMLDivElement | null>
        inputRef: MutableRefObject<HTMLInputElement | null>
    }
}
