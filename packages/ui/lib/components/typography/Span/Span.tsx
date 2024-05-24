import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Root } from './Span.styled'

// Types
import { BodySizeType, FontColorType, FontWeightType } from '@/types/typography'

export interface SpanProps {
    color?: FontColorType
    ellipse?: boolean
    size?: BodySizeType
    weight?: FontWeightType
}

export const Span = forwardRef<HTMLSpanElement, PropsWithChildren<SpanProps>>(function Base(
    {
        color = FontColorType.INHERIT,
        ellipse = false,
        size = BodySizeType.INHERIT,
        weight = FontWeightType.INHERIT,
        children,
        ...rest
    },
    ref,
) {
    return (
        <Root {...rest} ref={ref} $color={color} $ellipse={ellipse} $size={size} $weight={weight}>
            {children}
        </Root>
    )
})
