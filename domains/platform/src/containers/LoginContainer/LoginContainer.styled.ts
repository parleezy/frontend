import Div100vh from 'react-div-100vh'
import styled from 'styled-components'

const Root = styled(Div100vh)`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.layout.spacing.xl};
`

export const Layout = {
    Root,
}
