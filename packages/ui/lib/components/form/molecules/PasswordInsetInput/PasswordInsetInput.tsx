import { forwardRef, useState } from 'react'

// Icons
import { General } from '@parleezy/icons'

// Styling
import { Layout } from './PasswordInsetInput.styled'

// Components
import { Label } from '@/typography/index'

export interface PasswordInsetInputProps {
    autoCapitalize?: boolean
    autoComplete?: boolean
    autoCorrect?: boolean
    disabled?: boolean
    id: string
    label: string
    placeholder?: string
    value?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const PasswordInsetInput = forwardRef<HTMLInputElement, PasswordInsetInputProps>(function Base(
    {
        autoCapitalize = false,
        autoComplete = false,
        autoCorrect = false,
        id,
        label,
        placeholder = 'Placeholder Text',
        disabled,
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
            <Layout.Container>
                <Label htmlFor={id} size="XS" weight="medium">
                    {label}
                </Label>

                <Layout.Input
                    ref={ref}
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
                    {...rest}
                />
            </Layout.Container>

            <Layout.Trigger type="button" onClick={() => setHidden(!hidden)}>
                {hidden ? <General.EyeOffIcon size="18px" /> : <General.EyeIcon size="18px" />}
            </Layout.Trigger>
        </Layout.Root>
    )
})
