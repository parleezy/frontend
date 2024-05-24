import { PropsWithChildren, forwardRef } from 'react'

// Types
import { HeadingProps } from '@/typography/Headings/HeadingProps.interface'
import { HeadingSizeType, FontWeightType, FontColorType } from '@/types/typography'

// Styling
import { Root } from '@/typography/Headings/Heading.styled'

export const H6 = forwardRef<HTMLHeadingElement, PropsWithChildren<HeadingProps>>(function Base(
    {
        color = FontColorType.PRIMARY,
        ellipse = false,
        size = HeadingSizeType.XS,
        weight = FontWeightType.BOLD,
        children,
        ...rest
    },
    ref,
) {
    return (
        <Root ref={ref} $color={color} $ellipse={ellipse} $size={size} $weight={weight} as="h6" {...rest}>
            {children}
        </Root>
    )
})
