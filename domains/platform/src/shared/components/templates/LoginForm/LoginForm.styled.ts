import styled from 'styled-components'
import { Link as TanstackLink } from '@tanstack/react-router'

const Root = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl2};
    width: 100%;
`

export const Layout = {
    Root,
}

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
    Recover,
}
