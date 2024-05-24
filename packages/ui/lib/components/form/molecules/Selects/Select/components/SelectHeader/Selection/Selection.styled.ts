import styled from 'styled-components'

// Styles
import { Style } from '@/utils/styles'

interface Props {
    $active: boolean
    $below: boolean
}

const Root = styled.button<Props>`
    ${({ $active, $below, theme }) => Style.Form.Selects.root($active, $below, theme)};

    padding: 0 ${({ theme }) => theme.layout.spacing.lg};
`

const Content = styled.div`
    ${({ theme }) => Style.Form.Selects.content(theme)};
    flex-grow: 1;

    span {
        flex-grow: 1;
        font-size: ${({ theme }) => theme.typography.body.size.md};
        line-height: ${({ theme }) => theme.typography.body.height.md};
    }
`

const Leading = styled.div`
    width: 30px;
    height: ${({ theme }) => theme.layout.height.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
        width: 24px;
        height: 24px;
    }
`

const Icon = styled.div`
    ${({ theme }) => Style.Form.Selects.trigger(theme)}
`

export const Layout = {
    Root,
    Content,
    Leading,
    Icon,
}
