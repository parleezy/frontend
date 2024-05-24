import Div100vh from 'react-div-100vh'
import styled from 'styled-components'

// Packages
import { H1, P } from '@parleezy/ui'
import { Link } from '@tanstack/react-router'

const Root = styled(Div100vh)`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${({ theme }) => theme.layout.spacing.xl};
`

const Inner = styled.div`
    max-width: ${({ theme }) => theme.layout.width.md};
`

export const Layout = {
    Root,
    Inner,
}

const Heading = styled(H1)`
    font-size: ${({ theme }) => theme.typography.heading.size.lg};
    line-height: ${({ theme }) => theme.typography.heading.height.md};
    margin-bottom: ${({ theme }) => theme.layout.spacing.xl3};

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

const A = styled(Link)`
    color: ${({ theme }) => theme.color.social.facebook.background.base};

    &:hover {
        text-decoration: underline;
    }
`

export const Text = {
    Heading,
    Supporting,
    A,
}
