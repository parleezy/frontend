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
