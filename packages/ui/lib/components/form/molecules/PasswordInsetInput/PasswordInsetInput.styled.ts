import styled from 'styled-components'

// Utils
import { Style } from '@/utils/styles'

const Root = styled.div`
    ${({ theme }) => Style.Form.InsetInput.root(theme)};
`

const Container = styled.div`
    ${({ theme }) => Style.Form.InsetInput.container(theme)};
`

const Input = styled.input`
    ${({ theme }) => Style.Form.InsetInput.input(theme)};
`

const Trigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.layout.spacing.sm};
    color: ${({ theme }) => theme.typography.font.color.tertiary};
`

export const Layout = {
    Root,
    Container,
    Input,
    Trigger,
}
