import styled from 'styled-components'

// Components
import { H2, P } from '@/typography/index'

interface Props {
    $center: boolean
}

// Layout
const Root = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    max-width: ${({ theme }) => theme.layout.width.xl};
    gap: ${({ theme }) => theme.layout.spacing.lg};

    ${({ $center }) =>
        $center &&
        `
        text-align: center;
        margin: auto;
    `}

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.xl};
    }
`

export const Layout = {
    Root,
}

const Heading = styled(H2)`
    font-size: ${({ theme }) => theme.typography.heading.size.sm};
    line-height: ${({ theme }) => theme.typography.heading.height.sm};
    margin-bottom: ${({ theme }) => theme.layout.spacing.xs};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.typography.heading.size.lg};
        line-height: ${({ theme }) => theme.typography.heading.height.lg};
    }
`

const Subheading = styled(P)`
    font-size: ${({ theme }) => theme.typography.body.size.sm};
    line-height: ${({ theme }) => theme.typography.body.height.sm};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.typography.body.size.md};
        line-height: ${({ theme }) => theme.typography.body.height.md};
    }
`

const Supporting = styled(P)`
    font-size: ${({ theme }) => theme.typography.body.size.lg};
    line-height: ${({ theme }) => theme.typography.body.height.lg};
    color: ${({ theme }) => theme.typography.font.color.tertiary};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.typography.body.size.xl};
        line-height: ${({ theme }) => theme.typography.body.height.xl};
    }

    a {
        font-weight: ${({ theme }) => theme.typography.font.weight.medium};

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Text = {
    Heading,
    Subheading,
    Supporting,
}
