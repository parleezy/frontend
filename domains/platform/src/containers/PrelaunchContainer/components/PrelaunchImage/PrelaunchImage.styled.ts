import { H2 } from '@parleezy/ui'
import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.background.secondary.hover};
    flex-basis: 50%;
`

export const Layout = {
    Root,
}

const Logo = styled(H2)`
    font-family: ${({ theme }) => theme.typography.font.family.brand};
    text-align: center;
    font-size: 18rem;
    line-height: 24rem;
`

export const Text = {
    Logo,
}
