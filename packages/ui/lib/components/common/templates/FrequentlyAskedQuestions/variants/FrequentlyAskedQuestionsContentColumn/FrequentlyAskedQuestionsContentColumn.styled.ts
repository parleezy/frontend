import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.layout.spacing.xl6};
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.xl7};
        flex-direction: row;
    }
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl5};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.xl6};
    }
`

export const Layout = {
    Root,
    Main,
}
