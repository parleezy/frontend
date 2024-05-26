import styled from 'styled-components'

const Root = styled.div`
    border-radius: ${({ theme }) => theme.layout.radius.lg};
    border: 1px solid ${({ theme }) => theme.color.border.primary.base};
    box-shadow: ${({ theme }) => theme.effect.shadow.md};
    background: ${({ theme }) => theme.color.background.primary.base};
    gap: ${({ theme }) => theme.layout.spacing.xl};
    padding: ${({ theme }) => theme.layout.spacing.xl};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: calc(100vw - 40px);

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        max-width: 450px;
    }
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
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xs};
`

const Trailing = styled.div`
    transform: translate(10px, -10px);
`

export const Layout = {
    Root,
    Leading,
    Content,
    Trailing,
}
