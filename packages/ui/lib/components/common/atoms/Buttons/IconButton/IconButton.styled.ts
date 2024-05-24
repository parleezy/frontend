import styled from 'styled-components'

// Types
import { ButtonColorType, ButtonSizeType } from '@/types/components'

// Utils
import { Style } from '@/utils/styles'

interface Props {
    $color: ButtonColorType
    $size: ButtonSizeType
}

const Root = styled.button<Props>`
    border-radius: ${({ theme }) => theme.layout.radius.md};
    box-shadow: ${({ theme }) => theme.effect.shadow.xs};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    svg {
        width: 20px;
        height: 20px;
    }

    &:active {
        transform: scale(0.98);
    }

    // Color
    ${({ $color, theme }) => {
        return `
            ${Style.Component.Button.Primary.color($color, theme)}
            ${Style.Component.Button.Primary.shadow($color, theme)}
        `
    }}

    // Size Variant
    ${({ $size, theme }) => Style.Component.Button.Icon.size($size, theme)}
`

export const Layout = {
    Root,
}
