import { forwardRef } from 'react'

// Packages
import { ChevronDownIcon, ChevronUpIcon } from '@parleezy/icons'

// Styling
import { Layout } from './Selection.styled'

// Types
import { OptionInterface } from '@/components/form/atoms'

// Data
import { useSelectContext } from '@/components/form/molecules/Selects/Select/provider'

// Components
import { Span } from '@/components/typography'

export interface SelectionProps {
    option?: OptionInterface | null
}

export const Selection = forwardRef<HTMLButtonElement, SelectionProps>(function Base({ ...rest }, ref) {
    const { config, data, dropdown } = useSelectContext()

    return (
        <Layout.Root
            {...rest}
            ref={ref}
            $active={dropdown.active}
            $below={dropdown.below}
            type="button"
            onClick={() => (dropdown.active ? dropdown.close() : dropdown.open())}
        >
            <Layout.Content>
                {data.selected?.leading && <Layout.Leading>{data.selected.leading}</Layout.Leading>}
                <Span>{data.selected?.label || config.text.header.placeholder}</Span>
                {data.selected?.trailing && <Layout.Leading>{data.selected.trailing}</Layout.Leading>}
            </Layout.Content>

            <Layout.Icon>
                {dropdown.active ? <ChevronUpIcon size="20px" /> : <ChevronDownIcon size="20px" />}
            </Layout.Icon>
        </Layout.Root>
    )
})
