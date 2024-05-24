import { forwardRef } from 'react'

// Styling
import { Layout } from './InsetInput.styled'

// Components
import { Label } from '@/typography/index'

export interface InsetInputProps {
    autoCapitalize?: boolean
    autoComplete?: boolean
    autoCorrect?: boolean
    disabled?: boolean
    id: string
    label: string
    placeholder?: string
    type?: string
    value?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const InsetInput = forwardRef<HTMLInputElement, InsetInputProps>(function Base(
    {
        autoCapitalize = false,
        autoComplete = false,
        autoCorrect = false,
        disabled,
        label,
        id,
        placeholder = 'Placeholder Text',
        type = 'text',
        value,
        onBlur,
        onChange,
        onFocus,

        ...rest
    },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref}>
            <Layout.Container>
                <Label htmlFor={id} size="XS" weight="medium">
                    {label}
                </Label>

                <Layout.Input
                    ref={ref}
                    {...rest}
                    autoCapitalize={autoCapitalize ? 'on' : 'off'}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    autoCorrect={autoCorrect ? 'on' : 'off'}
                    disabled={disabled}
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                />
            </Layout.Container>
        </Layout.Root>
    )
})
