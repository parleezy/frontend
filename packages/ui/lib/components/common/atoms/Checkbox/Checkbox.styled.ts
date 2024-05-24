import styled from 'styled-components'

// Types
import { CheckboxRadiusType, CheckboxSizeType } from '@/types/components'

// Components
import { Label } from '@/typography/index'

// Utils
import { Style } from '@/utils/styles'

const Root = styled(Label)`
    cursor: pointer;
    width: 100%;
`

interface Props {
    $radius: CheckboxRadiusType
    $size: CheckboxSizeType
}

const Input = styled.input<Props>`
    display: none;

    + *:before {
        content: '';
        width: 20px;
        height: 20px;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ theme }) => theme.color.border.primary.base};
        background: ${({ theme }) => theme.color.background.primary.base};
        display: flex;
        cursor: pointer;

        ${({ $radius, theme }) => Style.Component.Checkbox.radius($radius, theme)}
        ${({ $size }) => Style.Component.Checkbox.size($size)}
    }

    &:disabled + *:before {
        cursor: not-allowed;
        background: ${({ theme }) => theme.color.background.secondary.base};
        border-color: ${({ theme }) => theme.color.border.primary.base};
    }

    &:checked + *:before {
        content: '✓';

        display: flex;
        background: ${({ theme }) => theme.color.brand.primary};
        border-color: ${({ theme }) => theme.color.brand.primary};
        color: ${({ theme }) => theme.color.alpha.white[90]};
    }

    &:disabled:checked + *:before {
        cursor: not-allowed;
        background: ${({ theme }) => theme.color.background.secondary.base};
        border-color: ${({ theme }) => theme.color.border.primary.base};
        color: ${({ theme }) => theme.typography.font.color.primary};
    }
`

const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: ${({ theme }) => theme.layout.spacing.xl};
`

export const Layout = {
    Root,
    Input,
    Inner,
}
