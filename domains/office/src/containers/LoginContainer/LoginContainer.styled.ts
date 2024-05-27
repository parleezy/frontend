import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import { Link } from '@tanstack/react-router'

const Root = styled(Div100vh)`
    background: ${({ theme }) => theme.color.background.secondary.base};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.layout.spacing.xl};
`

const Card = styled.div`
    background: ${({ theme }) => theme.color.background.primary.base};
    box-shadow: ${({ theme }) => theme.effect.shadow.sm};
    padding: ${({ theme }) => theme.layout.spacing.xl4} ${({ theme }) => theme.layout.spacing.xl3};
    border-radius: ${({ theme }) => theme.layout.radius.md};
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl4};
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.sm};
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl2};
`

export const Layout = {
    Root,
    Card,
    Header,
    Form,
}

const Login = styled(Link)`
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

const Recover = styled(Link)`
    text-align: right;
    font-size: ${({ theme }) => theme.typography.body.size.sm};
    line-height: ${({ theme }) => theme.typography.body.height.sm};
    transform: translateY(-10px);

    &:hover {
        text-decoration: underline;
    }
`

export const Text = {
    Login,
    Recover,
}
