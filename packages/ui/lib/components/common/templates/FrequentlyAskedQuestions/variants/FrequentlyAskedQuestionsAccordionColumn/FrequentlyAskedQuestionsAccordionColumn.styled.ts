import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.layout.spacing.xl6};
    flex-direction: column;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.xl7};
    }

    > div {
        width: 100%;
    }
`

const Main = styled.div``

export const Layout = {
    Root,
    Main,
}
