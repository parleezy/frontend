import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.layout.width.xl};
    gap: ${({ theme }) => theme.layout.spacing.xl};
    width: 100%;
    margin: auto;
`

export const Layout = {
    Root,
}
