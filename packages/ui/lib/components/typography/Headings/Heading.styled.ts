import styled from 'styled-components'

// Types
import { FontColorType, FontWeightType, HeadingSizeType } from '@/types/typography'

// Utils
import { Style } from '@/utils/styles'

interface Props {
    $color: FontColorType
    $ellipse: boolean
    $size: HeadingSizeType
    $weight: FontWeightType
}

export const Root = styled.h1<Props>`
    margin: 0;
    padding: 0;
    transition: ${({ theme }) => theme.animation.css.transition.all};

    // Core Styles
    color: ${({ $color, theme }) => theme.typography.font.color[$color]};
    font-weight: ${({ $weight, theme }) => theme.typography.font.weight[$weight]};

    // Size
    ${({ $size, theme }) => Style.Typography.Heading.size($size, theme)}

    // Ellipse
    ${({ $ellipse }) => $ellipse && `overflow: hidden; white-space: nowrap; text-overflow: ellipsis;`}
`
