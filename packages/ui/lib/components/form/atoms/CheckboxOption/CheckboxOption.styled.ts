import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.layout.spacing.md} ${({ theme }) => theme.layout.spacing.xl};
    gap: ${({ theme }) => theme.layout.spacing.xl};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:hover {
        background: ${({ theme }) => theme.color.background.secondary.base};
    }
`

const Content = styled.div`
    flex-grow: 1;
    text-align: left;
`

export const Layout = {
    Root,
    Content,
}
