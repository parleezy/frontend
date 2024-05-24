import styled from 'styled-components'

// Utils
import { Style } from '@/utils/styles'

const Root = styled.div`
    ${({ theme }) => Style.Form.Input.root(theme)};
`

const Container = styled.div`
    ${({ theme }) => Style.Form.Input.container(theme)};

    min-height: calc(${({ theme }) => theme.layout.height.lg} * 2.5);
    outline: none;
`

const Textarea = styled.textarea`
    ${({ theme }) => Style.Form.Input.textarea(theme)};
`

const Indicator = styled.div`
    width: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({ theme }) => theme.layout.spacing.sm};
`

export const Layout = {
    Root,
    Container,
    Textarea,
    Indicator,
}
