import styled from 'styled-components'

// Packages
import { Style } from '@/utils/styles'

// Types
import { BadgeColorType, BadgeSizeType } from '@/types/components'

interface Props {
    $color: BadgeColorType
    $radius: 'PILL' | 'BOX'
    $size: BadgeSizeType
}

export const Root = styled.div<Props>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.layout.spacing.xs};
    border-radius: ${({ $radius, theme }) => ($radius === 'PILL' ? theme.layout.radius.xl2 : theme.layout.radius.md)};

    ${({ $color, theme }) => Style.Component.Badge.color($color, theme)};
    ${({ $size, theme }) => Style.Component.Badge.size($size, theme)};
`
