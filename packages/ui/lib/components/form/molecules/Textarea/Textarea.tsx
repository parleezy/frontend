import { forwardRef } from 'react'

// Styling
import { Layout } from './Textarea.styled'

// Components
import { InputFooter, InputHeader } from '@/form/atoms'

export interface TextareaProps {
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
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Base(
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
                <Layout.Textarea
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
            </Layout.Container>

            {(help || error) && <InputFooter error={error} help={help} />}
        </Layout.Root>
    )
})
