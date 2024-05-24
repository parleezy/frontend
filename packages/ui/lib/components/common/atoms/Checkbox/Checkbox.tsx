import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './Checkbox.styled'

// Types
import { CheckboxRadiusType, CheckboxSizeType } from '@/types/components'

export interface CheckboxProps {
    id: string
    checked: boolean
    disabled?: boolean
    label?: string
    radius?: CheckboxRadiusType
    size?: CheckboxSizeType
    onChange?: () => void
}

export const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(function Base(
    {
        checked,
        disabled = false,
        id,
        label,
        radius = CheckboxRadiusType.MD,
        size = CheckboxSizeType.MD,
        onChange,
        children,
        ...rest
    },
    ref,
) {
    return (
        <Layout.Root {...rest} htmlFor={id}>
            <Layout.Input
                ref={ref}
                $radius={radius}
                $size={size}
                aria-checked={checked}
                checked={checked}
                disabled={disabled}
                id={id}
                type="checkbox"
                onChange={onChange}
            />
            {children && <Layout.Inner>{children}</Layout.Inner>}
        </Layout.Root>
    )
})
