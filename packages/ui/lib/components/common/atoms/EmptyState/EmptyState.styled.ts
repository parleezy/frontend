import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${({ theme }) => theme.layout.spacing.md};
    max-width: 350px;
    text-align: center;
    margin: auto;
    padding: ${({ theme }) => theme.layout.spacing.xl6} ${({ theme }) => theme.layout.spacing.md};
`

export const Layout = {
    Root,
}
