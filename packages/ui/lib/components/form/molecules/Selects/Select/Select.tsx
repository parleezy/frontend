import { PropsWithChildren, forwardRef } from 'react'

// Data
import { SelectProvider } from './provider'

// Components
import { SelectInner } from './components'

// Types
import { OptionInterface } from '@/components/form/atoms'

export interface SelectProps {
    config?: {
        text?: {
            header_placeholder?: string
        }
    }
    data: {
        selected: OptionInterface | null
    }
}

export const Select = forwardRef<HTMLDivElement, PropsWithChildren<SelectProps>>(function Base(
    { config, data, children, ...rest },
    ref,
) {
    return (
        <SelectProvider config={config} data={data}>
            <SelectInner {...rest} ref={ref}>
                {children}
            </SelectInner>
        </SelectProvider>
    )
})
