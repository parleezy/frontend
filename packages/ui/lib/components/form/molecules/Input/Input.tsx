import { forwardRef } from 'react'

import { CheckCircleIcon, SlashCircle01Icon } from '@parleezy/icons'

// Styling
import { Layout } from './Input.styled'

// Components
import { InputHeader, InputFooter } from '@/form/atoms'

export interface InputProps {
    autoCapitalize?: boolean
    autoComplete?: boolean
    autoCorrect?: boolean
    disabled?: boolean
    error?: string
    help?: string
    hint?: string
    id: string
    label?: string
    placeholder?: string
    value?: string
    unique?: boolean
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Base(
    {
        autoCapitalize = false,
        autoComplete = false,
        autoCorrect = false,
        disabled = false,
        error,
        help,
        hint,
        id,
        label,
        placeholder,
        value,
        unique,
        onBlur,
        onChange,
        onFocus,
        ...rest
    },
    ref,
) {
    return (
        <Layout.Root {...rest}>
            {(label || hint) && <InputHeader hint={hint} id={id} label={label || ''} />}

            <Layout.Container>
                <Layout.Input
                    ref={ref}
                    {...rest}
                    autoCapitalize={autoCapitalize ? 'on' : 'off'}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    autoCorrect={autoCorrect ? 'on' : 'off'}
                    disabled={disabled}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                />

                {unique !== null && unique !== undefined && value && value.length > 3 && (
                    <Layout.Indicator>
                        {unique ? (
                            <CheckCircleIcon color="green" size="16px" />
                        ) : (
                            <SlashCircle01Icon color="red" size="16px" />
                        )}
                    </Layout.Indicator>
                )}
            </Layout.Container>

            {(help || error) && <InputFooter error={error} help={help} />}
        </Layout.Root>
    )
})
