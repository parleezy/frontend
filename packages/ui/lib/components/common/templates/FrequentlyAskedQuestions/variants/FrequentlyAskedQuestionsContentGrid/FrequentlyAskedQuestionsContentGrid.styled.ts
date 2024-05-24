import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl6};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.xl7};
    }
`

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl5};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        row-gap: ${({ theme }) => theme.layout.spacing.xl7};
        column-gap: ${({ theme }) => theme.layout.spacing.xl4};
    }

    > div {
        width: 100%;

        @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
            width: calc((100% - ${({ theme }) => theme.layout.spacing.xl4}) / 2);
        }

        @media (min-width: ${({ theme }) => theme.layout.breakpoint.laptop}) {
            width: calc(
                (100% - ${({ theme }) => theme.layout.spacing.xl4} - ${({ theme }) => theme.layout.spacing.xl4}) / 3
            );
        }
    }
`

export const Layout = {
    Root,
    Main,
}
