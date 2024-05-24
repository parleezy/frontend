import styled from 'styled-components'

// Components
import { P } from '@/typography/index'

interface Props {
    $center: boolean
    $orientation: 'column' | 'row'
}

const Root = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: ${({ $orientation }) => $orientation};
    gap: ${({ theme }) => theme.layout.spacing.xl};

    ${({ $center }) => $center && `align-items: center; justify-content: center; text-align: center;`}

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.xl2};
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xs};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        gap: ${({ theme }) => theme.layout.spacing.md};
    }
`

const Icon = styled.div`
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

export const Layout = {
    Root,
    Content,
    Icon,
}

const Title = styled(P)`
    font-weight: ${({ theme }) => theme.typography.font.weight.semibold};
    font-size: ${({ theme }) => theme.typography.body.size.lg};
    line-height: ${({ theme }) => theme.typography.body.height.lg};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        font-weight: ${({ theme }) => theme.typography.font.weight.medium};
    }
`

const Supporting = styled(P)`
    font-size: ${({ theme }) => theme.typography.body.size.md};
    line-height: ${({ theme }) => theme.typography.body.height.md};
    color: ${({ theme }) => theme.typography.font.color.tertiary};
`

export const Text = {
    Title,
    Supporting,
}
