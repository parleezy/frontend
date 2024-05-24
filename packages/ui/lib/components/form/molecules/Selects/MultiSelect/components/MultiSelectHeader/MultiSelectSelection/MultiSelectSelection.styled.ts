import styled from 'styled-components'

const Root = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.layout.spacing.xs};
    border-radius: ${({ theme }) => theme.layout.radius.sm};
    border: 1px solid ${({ theme }) => theme.color.border.primary.base};
    background: ${({ theme }) => theme.color.background.secondary.base};
    padding: ${({ theme }) => theme.layout.spacing.xs} ${({ theme }) => theme.layout.spacing.md};
    flex-shrink: 0;
`

const Trigger = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: ${({ theme }) => theme.layout.radius.xs};
    transition: ${({ theme }) => theme.animation.css.transition.all};
    flex-shrink: 0;

    svg {
        width: 14px;
    }

    &:hover {
        background: ${({ theme }) => theme.color.background.secondary.hover};
    }

    &:active {
        transform: scale(0.97);
    }
`

export const Layout = {
    Root,
    Trigger,
}
