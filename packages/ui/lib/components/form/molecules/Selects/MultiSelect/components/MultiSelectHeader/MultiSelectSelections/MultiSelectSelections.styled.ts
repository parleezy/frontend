import styled from 'styled-components'

const Root = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
`

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.layout.spacing.xs};
    flex-grow: 1;
    height: 100%;
    padding: 7px 8px;
    width: auto;
`

export const Layout = {
    Root,
    Inner,
}
