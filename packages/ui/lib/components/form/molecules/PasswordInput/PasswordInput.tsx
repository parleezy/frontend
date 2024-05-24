import { forwardRef, useState } from 'react'

// Packages
import { General } from '@parleezy/icons'

// Styling
import { Layout } from './PasswordInput.styled'

// Components
import { InputHeader, InputFooter } from '@/form/atoms'

export interface PasswordInputProps {
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
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(function Base(
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
    const [hidden, setHidden] = useState<boolean>(true)

    return (
        <Layout.Root {...rest} ref={ref}>
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
                    type={hidden ? 'password' : 'text'}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                />
                <Layout.Trigger type="button" onClick={() => setHidden(!hidden)}>
                    {hidden ? <General.EyeOffIcon size="18px" /> : <General.EyeIcon size="18px" />}
                </Layout.Trigger>
            </Layout.Container>

            {(help || error) && <InputFooter error={error} help={help} />}
        </Layout.Root>
    )
})
