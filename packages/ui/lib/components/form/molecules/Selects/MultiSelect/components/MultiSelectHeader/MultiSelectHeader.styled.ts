import styled from 'styled-components'

// Styles
import { Style } from '@/utils/styles'

interface Props {
    $active: boolean
    $below: boolean
}

const Root = styled.div<Props>`
    ${({ $active, $below, theme }) => Style.Form.Selects.root($active, $below, theme)};

    display: flex;
    align-items: center;
    justify-content: center;
`

const Trigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: ${({ theme }) => theme.layout.height.lg};
    padding: 0 ${({ theme }) => theme.layout.spacing.lg};

    svg {
        color: ${({ theme }) => theme.color.alpha.black[50]};
    }
`

export const Layout = {
    Root,
    Trigger,
}
