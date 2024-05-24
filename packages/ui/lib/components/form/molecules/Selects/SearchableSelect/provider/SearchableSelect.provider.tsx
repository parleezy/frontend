import { Dispatch, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react'

// Context
import { SearchableSelectContext } from './SearchableSelect.context'

// Types
import { OptionInterface } from '@/components/form/atoms'

// Hookes
import { useBelowCenterHalf, useElementCoordinates } from '@/hooks/index'

interface Props {
    config?: {
        text?: {
            header_placeholder?: string
        }
    }
    data: {
        selected: OptionInterface | null
        reset: () => void
    }
    filter: {
        term: string
        setTerm: Dispatch<SetStateAction<string>>
    }
}

function useSearchableSelect({ config, data, filter }: Props) {
    const [active, setActive] = useState<boolean>(false)

    // Refs
    const headerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Hooks
    const below = useBelowCenterHalf(headerRef)
    const coordinates = useElementCoordinates(headerRef)

    const clear = () => {
        filter.setTerm('')
        data.reset()
    }

    useEffect(() => {
        if (active) {
            setActive(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.selected])

    return {
        config: {
            text: {
                header: {
                    placeholder: config?.text?.header_placeholder || 'Please choose an option.',
                },
            },
        },
        data: {
            ...data,
            clear,
        },
        dropdown: {
            active,
            below,
            coordinates,
            close: () => setActive(false),
            open: () => setActive(true),
        },
        filter: {
            term: filter.term,
            setTerm: filter.setTerm,
        },
        refs: {
            headerRef,
            inputRef,
        },
    }
}

export function SearchableSelectProvider({ children, config, data, filter }: PropsWithChildren<Props>) {
    return (
        <SearchableSelectContext.Provider value={useSearchableSelect({ config, data, filter })}>
            {children}
        </SearchableSelectContext.Provider>
    )
}
