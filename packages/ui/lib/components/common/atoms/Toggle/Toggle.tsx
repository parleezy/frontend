import { forwardRef } from 'react'

// Styling
import { Layout } from './Toggle.styled'

export interface ToggleProps {
    checked: boolean
    onClick: () => void
}

export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(function Base({ checked, onClick, ...rest }, ref) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <Layout.Toggle checked={checked} type="checkbox" onClick={onClick} {...rest} />
        </Layout.Root>
    )
})
