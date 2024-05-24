import { forwardRef } from 'react'

// Styling
import { Layout } from './MultiSelectSelections.styled'

// Components
import { MultiSelectSelection } from '../MultiSelectSelection/MultiSelectSelection'
import { useMultiSelectContext } from '@/form/molecules/Selects/MultiSelect/provider'

export const MultiSelectSelections = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    const { data } = useMultiSelectContext()

    return (
        <Layout.Root {...rest} ref={ref}>
            <Layout.Inner>
                {data.selections.map((option) => (
                    <MultiSelectSelection key={option.value} option={option} remove={() => data.remove(option)} />
                ))}
            </Layout.Inner>
        </Layout.Root>
    )
})
