import styled from 'styled-components'
import { motion } from 'framer-motion'

// Components
import { P } from '@/typography/P'

interface Props {
    $open: boolean
}

const Root = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    padding: ${({ theme }) => theme.layout.spacing.xl2};
    border-radius: ${({ theme }) => theme.layout.radius.xl};
    ${({ $open, theme }) => $open && `background: ${theme.color.background.secondary.base};`}

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        padding: ${({ theme }) => theme.layout.spacing.xl4};
    }
`

const Icon = styled.div`
    position: absolute;
    left: 0;
    top: 1px;
`

const Content = styled(motion.div)`
    padding-right: ${({ theme }) => theme.layout.spacing.xl};
    padding-left: ${({ theme }) => theme.layout.spacing.xl5};
    overflow: hidden;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        padding-right: ${({ theme }) => theme.layout.spacing.xl4};
        padding-left: ${({ theme }) => theme.layout.spacing.xl6};
    }
`

const Trigger = styled.button`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    position: relative;
    padding-left: ${({ theme }) => theme.layout.spacing.xl5};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        padding-left: ${({ theme }) => theme.layout.spacing.xl6};
    }
`

export const Layout = {
    Root,
    Icon,
    Content,
    Trigger,
}

const Title = styled(P)`
    font-size: ${({ theme }) => theme.typography.body.size.lg};
    line-height: ${({ theme }) => theme.typography.body.height.lg};
`

const Supporting = styled(P)`
    margin-top: ${({ theme }) => theme.layout.spacing.md};
    font-size: ${({ theme }) => theme.typography.body.size.md};
    line-height: ${({ theme }) => theme.typography.body.height.md};
`

export const Text = {
    Title,
    Supporting,
}
