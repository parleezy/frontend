import styled from 'styled-components'

// Types
import { CloseButtonSizeType } from '@/types/components'
import { Style } from '@/utils/styles'

interface Props {
    $size: CloseButtonSizeType
}

export const Root = styled.button<Props>`
    // Layout
    display: inline-flex;
    align-items: center;
    justify-content: center;

    // Styles
    border-radius: ${({ theme }) => theme.layout.radius.md};
    padding: ${({ theme }) => theme.layout.spacing.md};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    // Size
    ${({ $size }) => Style.Component.Button.Close.size($size)}

    background: transparent;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.typography.font.color.tertiary};

    &:hover {
        background: ${({ theme }) => theme.color.background.primary.hover};
        border: 1px solid ${({ theme }) => theme.color.background.primary.hover};
        color: ${({ theme }) => theme.typography.font.color.tertiary};
    }

    &:active {
        transform: scale(0.98);
    }

    &:hover {
        cursor: pointer;
    }
`
