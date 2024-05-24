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

const Trigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.layout.spacing.xl};
    color: ${({ theme }) => theme.typography.font.color.tertiary};
`

export const Layout = {
    Root,
    Container,
    Input,
    Trigger,
}
