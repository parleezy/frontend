import { PropsWithChildren, useEffect, useRef, useState } from 'react'

// Context
import { SelectContext } from './Select.context'

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
    }
}

function useSelect({ config, data }: Props) {
    const [active, setActive] = useState<boolean>(false)

    // Refs
    const headerRef = useRef<HTMLButtonElement>(null)

    // Hooks
    const below = useBelowCenterHalf(headerRef)
    const coordinates = useElementCoordinates(headerRef)

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
        data,
        dropdown: {
            active,
            below,
            coordinates,
            close: () => setActive(false),
            open: () => setActive(true),
        },
        refs: {
            headerRef,
        },
    }
}

export function SelectProvider({ children, config, data }: PropsWithChildren<Props>) {
    return <SelectContext.Provider value={useSelect({ config, data })}>{children}</SelectContext.Provider>
}
