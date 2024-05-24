import { forwardRef } from 'react'

// Styling
import { Layout } from './Option.styled'

// Type
import { OptionInterface } from './Option.interface'

// Components
import { P } from '@/typography/index'

export interface OptionProps {
    option: OptionInterface
    selected: boolean
    onClick: () => void
}

export const Option = forwardRef<HTMLButtonElement, OptionProps>(function Base(
    { option, selected, onClick, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref} $selected={selected} value={option.value} onClick={onClick}>
            {option.leading && <Layout.Leading>{option.leading}</Layout.Leading>}

            <Layout.Content>
                <P>{option.label}</P>
            </Layout.Content>

            {option.trailing && <Layout.Trailing>{option.trailing}</Layout.Trailing>}
        </Layout.Root>
    )
})
