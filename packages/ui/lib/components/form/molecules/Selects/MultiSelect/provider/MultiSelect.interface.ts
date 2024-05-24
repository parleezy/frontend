import { Dispatch, MutableRefObject, SetStateAction } from 'react'

// Types
import { OptionInterface } from '@/components/form/atoms'
import { ElementCoordinates } from '@/hooks/useElementCoordinates'

export interface MultiSelectInterface {
    config: {
        text: {
            header: {
                placeholder: string
            }
            filter: {
                placeholder: string
            }
            toolbar: {
                clear: string
                selectAll: string
            }
        }
    }
    data: {
        selections: OptionInterface[]
        clear: () => void
        selectAll: () => void
        remove: (option: OptionInterface) => void
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
