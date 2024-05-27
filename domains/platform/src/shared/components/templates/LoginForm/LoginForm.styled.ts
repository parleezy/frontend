import styled from 'styled-components'
import { Link as TanstackLink } from '@tanstack/react-router'

const Root = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl2};
    width: 1000%;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        max-width: 350px;
    }
`

export const Layout = {
    Root,
}

const Login = styled(TanstackLink)`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.layout.spacing.sm};
    color: ${({ theme }) => theme.color.brand.tertiary};

    &:hover {
        text-decoration: underline;
    }
`

const Recover = styled(TanstackLink)`
    text-align: right;
    font-size: ${({ theme }) => theme.typography.body.size.sm};
    line-height: ${({ theme }) => theme.typography.body.height.sm};
    transform: translateY(-10px);

    &:hover {
        text-decoration: underline;
    }
`

export const Link = {
    Login,
    Recover,
}
