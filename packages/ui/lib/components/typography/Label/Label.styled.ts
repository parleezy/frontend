import styled from 'styled-components'

// Types
import { BodySizeType, FontColorType, FontWeightType } from '@/types/typography'

// Utils
import { Style } from '@/utils/styles'

interface Props {
    $color: FontColorType
    $ellipse: boolean
    $size: BodySizeType
    $weight: FontWeightType
}

export const Root = styled.label<Props>`
    margin: 0;
    padding: 0;
    transition: ${({ theme }) => theme.animation.css.transition.all};

    // Core Styles
    color: ${({ $color, theme }) => theme.typography.font.color[$color]};
    font-weight: ${({ $weight, theme }) => theme.typography.font.weight[$weight]};

    // Size
    ${({ $size, theme }) => Style.Typography.Body.size($size, theme)}

    // Ellipse
    ${({ $ellipse }) => $ellipse && `overflow: hidden; white-space: nowrap; text-overflow: ellipsis;`}
`
