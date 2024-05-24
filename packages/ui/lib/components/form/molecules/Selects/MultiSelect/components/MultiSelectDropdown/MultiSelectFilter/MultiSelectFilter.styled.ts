import styled from 'styled-components'

interface Props {
    $below: boolean
}

const Root = styled.div<Props>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.layout.spacing.lg};
    padding: ${({ theme }) => theme.layout.spacing.lg} ${({ theme }) => theme.layout.spacing.lg}
        ${({ theme }) => theme.layout.spacing.xl} ${({ theme }) => theme.layout.spacing.lg};
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.color.border.primary.base};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        height: ${({ theme }) => theme.layout.height.lg};
        padding: 0 ${({ theme }) => theme.layout.spacing.lg};
        border: none;

        ${({ $below, theme }) =>
            $below
                ? `
            border-top: 1px solid ${theme.color.border.primary.base};`
                : `
            border-bottom: 1px solid ${theme.color.border.primary.base};`}
    }
`

const Icon = styled.button`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`

const Input = styled.input`
    flex-grow: 1;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.typography.body.size.sm};
    line-height: ${({ theme }) => theme.typography.body.height.sm};
`

const Clear = styled.button`
    padding: 0 ${({ theme }) => theme.layout.spacing.sm};

    svg {
        width: 14px;
    }
`

export const Layout = {
    Root,
    Icon,
    Input,
    Clear,
}
