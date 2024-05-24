import { forwardRef } from 'react'

// Packages
import { CloseIcon } from '@parleezy/icons'

// Components
import { Span } from '@/components/typography'

// Styling
import { Layout } from './MultiSelectSelection.styled'

// Types
import { OptionInterface } from '@/components/form/atoms'

export interface MultiSelectSelectionProps {
    option: OptionInterface
    remove: () => void
}

export const MultiSelectSelection = forwardRef<HTMLDivElement, MultiSelectSelectionProps>(function Base(
    { option, remove, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <Span color="tertiary" size="SM">
                {option.label}
            </Span>

            <Layout.Trigger onClick={remove}>
                <CloseIcon size="14px" />
            </Layout.Trigger>
        </Layout.Root>
    )
})
