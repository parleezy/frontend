import { forwardRef } from 'react'

// Styling
import { Layout } from './InputHeader.styled'

// Components
import { Label, P } from '@/typography/index'

export interface InputHeaderProps {
    id: string
    label: string
    hint?: string
}

export const InputHeader = forwardRef<HTMLDivElement, InputHeaderProps>(function Base(
    { id, label, hint, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <Label htmlFor={id} size="SM" weight="medium">
                {label}
            </Label>

            {hint && (
                <P color="tertiary" size="SM">
                    {hint}
                </P>
            )}
        </Layout.Root>
    )
})
