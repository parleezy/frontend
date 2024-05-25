import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

const Root = styled(Div100vh)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100vw;
    padding: ${({ theme }) => theme.layout.spacing.xl5} ${({ theme }) => theme.layout.spacing.xl3};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        flex-direction: row;
        justify-content: center;
        padding: ${({ theme }) => theme.layout.spacing.xl};
    }
`

const Inner = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.layout.spacing.xl7};
    height: 100%;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        height: auto;
    }
`

const Notification = styled.div`
    border-radius: 8px;
    background: green;
    width: 300px;
    padding: 25px;
`

export const Layout = {
    Root,
    Inner,
    Notification,
}
