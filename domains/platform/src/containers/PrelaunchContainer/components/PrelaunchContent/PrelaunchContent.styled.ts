import styled from 'styled-components'

// Components
import { H1, P } from '@parleezy/ui'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: ${({ theme }) => theme.layout.spacing.xl6};
    flex-basis: 100%;
    justify-content: space-between;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        padding: ${({ theme }) => theme.layout.spacing.xl7} 0;
        flex-basis: 50%;
        justify-content: center;
    }
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({ theme }) => theme.layout.spacing.xl2};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        justify-content: center;
    }
`

export const Layout = {
    Root,
    Inner,
}

const Heading = styled(H1)`
    font-size: ${({ theme }) => theme.typography.heading.size.lg};
    line-height: ${({ theme }) => theme.typography.heading.height.md};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.typography.heading.size.xl};
        line-height: ${({ theme }) => theme.typography.heading.height.lg};
    }
`

const Supporting = styled(P)`
    font-size: ${({ theme }) => theme.typography.body.size.md};
    line-height: ${({ theme }) => theme.typography.body.height.lg};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.typography.body.size.xl};
        line-height: ${({ theme }) => theme.typography.body.height.xl};
    }
`

export const Text = {
    Heading,
    Supporting,
}
