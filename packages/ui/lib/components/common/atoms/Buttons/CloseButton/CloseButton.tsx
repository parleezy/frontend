import { forwardRef } from 'react'
import { CloseIcon } from '@parleezy/icons'

// Styling
import { Root } from './CloseButton.styled'

// Types
import { CloseButtonSizeType } from '@/types/components'

export interface CloseButtonProps {
    disabled?: boolean
    size?: CloseButtonSizeType
    onClick: () => void
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function Base(
    { disabled = false, size = CloseButtonSizeType.MD, onClick, ...rest },
    ref,
) {
    return (
        <Root ref={ref} $size={size} disabled={disabled} type="button" onClick={onClick} {...rest}>
            <CloseIcon size={size === CloseButtonSizeType.LG ? '24px' : '20px'} />
        </Root>
    )
})
