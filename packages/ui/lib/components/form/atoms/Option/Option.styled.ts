import styled, { css } from 'styled-components'

interface Props {
    $selected: boolean
}

const selectedCSS = css`
    background: ${({ theme }) => theme.color.background.secondary.base};

    &:hover {
        background: ${({ theme }) => theme.color.background.secondary.base};
    }
`

const Root = styled.button<Props>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.layout.spacing.lg} ${({ theme }) => theme.layout.spacing.xl};
    gap: ${({ theme }) => theme.layout.spacing.xl};
    transition: ${({ theme }) => theme.animation.css.transition.all};
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.color.background.secondary.base};
    }

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        padding: ${({ theme }) => theme.layout.spacing.md} ${({ theme }) => theme.layout.spacing.xl};
    }

    ${({ $selected }) => $selected && selectedCSS};
`

const Leading = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 28px;
        height: 28px;
    }

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        img {
            width: 24px;
            height: 24px;
        }
    }
`

const Trailing = styled.div`
    flex-shrink: 0;

    img {
        width: 28px;
        height: 28px;
    }

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        img {
            width: 24px;
            height: 24px;
        }
    }
`

const Content = styled.div`
    flex-grow: 1;
    text-align: left;

    p {
        font-size: ${({ theme }) => theme.typography.body.size.md};
        line-height: ${({ theme }) => theme.typography.body.height.md};
    }
`

export const Layout = {
    Root,
    Content,
    Leading,
    Trailing,
}
