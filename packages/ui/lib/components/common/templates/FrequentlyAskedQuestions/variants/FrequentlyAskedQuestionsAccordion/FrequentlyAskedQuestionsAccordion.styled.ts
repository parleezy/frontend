import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.layout.spacing.xl6};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.xl7};
    }
`

const Main = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.layout.width.xl};
`

export const Layout = {
    Root,
    Main,
}
