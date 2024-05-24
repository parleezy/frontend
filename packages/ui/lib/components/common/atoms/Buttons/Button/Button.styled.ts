import styled from 'styled-components'

// Types
import { ButtonColorType, ButtonSizeType } from '@/types/components/button'

// Utils
import { Style } from '@/utils/styles'

interface Props {
    $color: ButtonColorType
    $full: boolean
    $size: ButtonSizeType
}

const Root = styled.button<Props>`
    // Layout
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $full }) => ($full ? '100%' : 'auto')};
    height: ${({ theme }) => theme.layout.height.lg};

    // General
    border-radius: ${({ theme }) => theme.layout.radius.md};
    box-shadow: ${({ theme }) => theme.effect.shadow.xs};
    font-weight: ${({ theme }) => theme.typography.font.weight.semibold};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    ${({ $color, theme }) => Style.Component.Button.Primary.color($color, theme)}
    ${({ $size, theme }) => Style.Component.Button.Primary.size($size, theme)}

    &:active {
        transform: scale(0.99);
    }

    &:hover {
        cursor: pointer;
    }
`

export const Layout = {
    Root,
}
