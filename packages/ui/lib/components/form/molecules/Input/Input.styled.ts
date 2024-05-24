import styled from 'styled-components'

// Utils
import { Style } from '@/utils/styles'

const Root = styled.div`
    ${({ theme }) => Style.Form.Input.root(theme)};
`

const Container = styled.div`
    ${({ theme }) => Style.Form.Input.container(theme)};
`

const Input = styled.input`
    ${({ theme }) => Style.Form.Input.input(theme)};
`

const Indicator = styled.div`
    width: 30px;
    height: ${({ theme }) => theme.layout.height.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({ theme }) => theme.layout.spacing.sm};
`

export const Layout = {
    Root,
    Container,
    Input,
    Indicator,
}
