import Div100vh from 'react-div-100vh'
import styled from 'styled-components'
import { Link as TanstackLink } from '@tanstack/react-router'

const Root = styled(Div100vh)`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.div`
    width: 100vw;
    padding: ${({ theme }) => theme.layout.spacing.xl2};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        width: 500px;
        flex-shrink: 0;
        padding: ${({ theme }) => theme.layout.spacing.xl};
    }
`

const FormInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.layout.spacing.xl6};
    width: 100%;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        max-width: 350px;
    }
`

const Advertisement = styled.div`
    flex-grow: 1;
    height: 100%;
    background: ${({ theme }) => theme.color.background.secondary.base};
    border-right: 1px solid ${({ theme }) => theme.color.border.secondary.base};
    display: none;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        display: flex;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.md};
`

export const Layout = {
    Root,
    Form,
    FormInner,
    Header,
    Advertisement,
}

const Signup = styled(TanstackLink)`
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

export const Link = {
    Signup,
}
