import styled from 'styled-components'

// Typography
import { P } from '@/typography/index'

interface Props {
    $selected: boolean
}

const Root = styled.button<Props>`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.layout.spacing.xl} ${({ theme }) => theme.layout.spacing.xl2};
    background: ${({ theme }) => theme.color.background.primary.base};
    border-bottom: 1px solid ${({ theme }) => theme.color.border.tertiary.base};
    transition: ${({ theme }) => theme.animation.css.transition.all};
    column-gap: ${({ theme }) => theme.layout.spacing.lg};
    width: 100%;
    text-align: left;

    ${({ theme, $selected }) =>
        $selected &&
        `
            background: ${theme.color.background.secondary.base};

            &:hover {
                background: ${theme.color.background.secondary.base};
            }
    `}

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: ${({ theme }) => theme.color.background.secondary.base};
    }
`

const Leading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
        width: 24px;
        height: 24px;
    }
`

const Trailing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
        color: ${({ theme }) => theme.color.border.primary.base};
        width: 22px;
    }

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        svg {
            color: ${({ theme }) => theme.color.border.primary.base};
            width: 16px;
        }
    }
`

const Content = styled.div`
    flex-grow: 1;
`

const Title = styled(P)`
    flex-grow: 1;
`

export const Layout = {
    Root,
    Content,
    Title,
    Leading,
    Trailing,
}
