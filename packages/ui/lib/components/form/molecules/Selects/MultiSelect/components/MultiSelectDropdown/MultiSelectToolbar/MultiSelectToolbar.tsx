import { forwardRef } from 'react'

// Packages
import { CloseIcon } from '@parleezy/icons'

// Components
import { Span } from '@/typography/Span'

// Styling
import { Layout } from './MultiSelectToolbar.styled'

// Data
import { useMultiSelectContext } from '@/form/molecules/Selects/MultiSelect/provider'

export const MultiSelectToolbar = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    const { config, data, dropdown } = useMultiSelectContext()

    return (
        <Layout.Root {...rest} ref={ref} $below={dropdown.below}>
            <Layout.SelectAll onClick={data.selectAll}>
                <Span size="XS">{config.text.toolbar.selectAll}</Span>
            </Layout.SelectAll>

            {data.selections.length > 0 && (
                <Layout.Clear onClick={data.clear}>
                    <CloseIcon size="14px" />
                    <Span size="XS">{config.text.toolbar.clear}</Span>
                </Layout.Clear>
            )}
        </Layout.Root>
    )
})
