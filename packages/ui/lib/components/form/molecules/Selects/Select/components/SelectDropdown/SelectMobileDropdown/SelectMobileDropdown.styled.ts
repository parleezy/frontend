import styled from 'styled-components'

// Utils
import { Style } from '@/utils/styles'

const Root = styled.div`
    ${({ theme }) => Style.Form.Selects.mobile(theme)};

    overflow: scroll;
    border-top-right-radius: ${({ theme }) => theme.layout.radius.lg};
    border-top-left-radius: ${({ theme }) => theme.layout.radius.lg};
`

export const Layout = {
    Root,
}
