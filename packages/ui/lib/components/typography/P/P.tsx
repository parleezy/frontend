import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Root } from './P.styled'

// Types
import { BodySizeType, FontColorType, FontWeightType } from '@/types/typography'

export interface ParagraphProps {
    color?: FontColorType
    ellipse?: boolean
    size?: BodySizeType
    weight?: FontWeightType
}

export const P = forwardRef<HTMLParagraphElement, PropsWithChildren<ParagraphProps>>(function Base(
    {
        color = FontColorType.INHERIT,
        ellipse = false,
        size = BodySizeType.MD,
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
