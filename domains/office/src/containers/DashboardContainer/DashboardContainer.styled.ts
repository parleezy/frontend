import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

const Root = styled(Div100vh)`
    background: ${({ theme }) => theme.color.background.secondary.base};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.layout.spacing.xl};
`

export const Layout = {
    Root,
}
