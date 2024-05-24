import { Dispatch, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react'

// Context
import { MultiSelectContext } from './MultiSelect.context'

// Types
import { OptionInterface } from '@/components/form/atoms'

// Hookes
import { useBelowCenterHalf, useElementCoordinates } from '@/hooks/index'

interface Props {
    config?: {
        text?: {
            header_placeholder?: string
            filter_placeholder?: string
            toolbar_clear?: string
            toolbar_selectall?: string
        }
    }
    data: {
        selections: OptionInterface[]
        clear: () => void
        selectAll: () => void
        remove: (option: OptionInterface) => void
    }
    filter: {
        term: string
        setTerm: Dispatch<SetStateAction<string>>
    }
}

function useMultiSelect({ config, data, filter }: Props) {
    const [active, setActive] = useState<boolean>(false)

    // Refs
    const headerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Hooks
    const below = useBelowCenterHalf(headerRef)
    const coordinates = useElementCoordinates(headerRef)

    useEffect(() => {
        if (active) {
            inputRef.current?.focus()
        } else {
            inputRef.current?.blur()
        }
    }, [active])

    return {
        config: {
            text: {
                header: {
                    placeholder: config?.text?.header_placeholder || 'Select one or more options.',
                },
                filter: {
                    placeholder: config?.text?.filter_placeholder || 'Search options',
                },
                toolbar: {
                    clear: config?.text?.toolbar_clear || 'Clear',
                    selectAll: config?.text?.toolbar_selectall || 'Select All',
                },
            },
        },
        data,
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

export function MultiSelectProvider({ children, data, filter }: PropsWithChildren<Props>) {
    return (
        <MultiSelectContext.Provider value={useMultiSelect({ data, filter })}>{children}</MultiSelectContext.Provider>
    )
}
