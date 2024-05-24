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
    padding: 0 ${({ theme }) => theme.layout.spacing.lg};
`

const Content = styled.button`
    ${({ theme }) => Style.Form.Selects.content(theme)};
`

const Input = styled.input`
    ${({ theme }) => Style.Form.Selects.input(theme)};
    height: ${({ theme }) => theme.layout.height.lg};
`

const Icon = styled.button`
    ${({ theme }) => Style.Form.Selects.trigger(theme)};
    flex-shrink: 0;
`

const Leading = styled.div`
    flex-shrink: 0;
    width: 30px;
    height: ${({ theme }) => theme.layout.height.lg};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 24px;
        height: 24px;
    }
`

export const Layout = {
    Root,
    Content,
    Input,
    Icon,
    Leading,
}
