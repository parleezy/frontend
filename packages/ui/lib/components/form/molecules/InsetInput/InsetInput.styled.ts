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

export const Layout = {
    Root,
    Container,
    Input,
}
