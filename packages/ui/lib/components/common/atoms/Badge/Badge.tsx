import { ReactNode, forwardRef } from 'react'

// Typography
import { Span } from '@/typography/index'

// Types
import { BadgeColorType, BadgeSizeType } from '@/types/components'

// Styling
import { Root } from './Badge.styled'

export interface BadgeProps {
    color?: BadgeColorType
    label: string
    leading?: ReactNode
    radius?: 'PILL' | 'BOX'
    size?: BadgeSizeType
    trailing?: ReactNode
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Base(
    { color = BadgeColorType.GREY, size = BadgeSizeType.MD, label, leading, radius = 'PILL', trailing, ...rest },
    ref,
) {
    return (
        <Root ref={ref} $color={color} $radius={radius} $size={size} {...rest}>
            {leading}
            <Span>{label}</Span>
            {trailing}
        </Root>
    )
})
