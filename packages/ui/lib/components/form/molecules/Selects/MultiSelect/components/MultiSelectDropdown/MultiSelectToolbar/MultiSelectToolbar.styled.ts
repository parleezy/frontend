import styled from 'styled-components'

interface Props {
    $below: boolean
}

const Root = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.layout.spacing.sm};
    border-bottom: 1px solid ${({ theme }) => theme.color.border.primary.base};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        ${({ $below, theme }) =>
            $below
                ? `border-bottom: 1px solid ${theme.color.border.primary.base};`
                : `border-top: 1px solid ${theme.color.border.primary.base};`}
    }
`

const Clear = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.layout.spacing.xs} ${({ theme }) => theme.layout.spacing.sm};
    color: ${({ theme }) => theme.typography.font.color.secondary};
    font-weight: ${({ theme }) => theme.typography.font.weight.semibold};
    gap: ${({ theme }) => theme.layout.spacing.xxs};
    border-radius: ${({ theme }) => theme.layout.radius.sm};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:hover {
        color: ${({ theme }) => theme.typography.font.color.tertiary};
        background: ${({ theme }) => theme.color.background.secondary.base};
    }
`

const SelectAll = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.layout.spacing.xs} ${({ theme }) => theme.layout.spacing.sm};
    color: ${({ theme }) => theme.typography.font.color.secondary};
    font-weight: ${({ theme }) => theme.typography.font.weight.semibold};
    gap: ${({ theme }) => theme.layout.spacing.xxs};
    border-radius: ${({ theme }) => theme.layout.radius.sm};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:hover {
        color: ${({ theme }) => theme.typography.font.color.tertiary};
        background: ${({ theme }) => theme.color.background.secondary.base};
    }
`

export const Layout = {
    Root,
    Clear,
    SelectAll,
}
