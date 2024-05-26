import styled from 'styled-components'

const Root = styled.div`
    padding: ${({ theme }) => theme.layout.spacing.xl};
    border-radius: ${({ theme }) => theme.layout.radius.lg};
    border: 1px solid ${({ theme }) => theme.color.border.primary.base};
    box-shadow: ${({ theme }) => theme.effect.shadow.sm};
    background: ${({ theme }) => theme.color.background.primary.base};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.layout.spacing.xl};
`

const Leading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;

    // Styling
    border-radius: ${({ theme }) => theme.layout.radius.md};
    box-shadow: ${({ theme }) => theme.effect.shadow.xs};
    border: 1px solid ${({ theme }) => theme.color.border.secondary.base};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        width: 48px;
        height: 48px;
    }
`

const Content = styled.div`
    flex-grow: 1;
`

export const Layout = {
    Root,
    Leading,
    Content,
}
