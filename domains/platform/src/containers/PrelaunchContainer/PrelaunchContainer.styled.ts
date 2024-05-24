import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

const Root = styled(Div100vh)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: ${({ theme }) => theme.layout.spacing.xl};
`

const Inner = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.layout.spacing.xl7};
`

export const Layout = {
    Root,
    Inner,
}
