import { motion } from 'framer-motion'
import styled from 'styled-components'

import { P } from '@/typography/index'

const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: ${({ theme }) => theme.layout.spacing.xl3} 0 0 0;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    border-top: 1px solid ${({ theme }) => theme.color.border.secondary.base};
    gap: ${({ theme }) => theme.layout.spacing.xl};

    &:first-child {
        border-top: none;
        padding-top: 0;
    }
`

const Content = styled(motion.div)`
    padding-right: ${({ theme }) => theme.layout.spacing.xl5};
    overflow: hidden;
    width: 100%;
`

export const Layout = {
    Root,
    Content,
}

const Container = styled.button`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({ theme }) => theme.layout.spacing.xl4};
    text-align: left;
`

const Icon = styled.div`
    color: ${({ theme }) => theme.typography.font.color.tertiary};
`

export const Trigger = {
    Container,
    Icon,
}

const Title = styled(P)`
    font-size: ${({ theme }) => theme.typography.body.size.lg};
    line-height: ${({ theme }) => theme.typography.body.height.lg};
`

const Supporting = styled(P)`
    font-size: ${({ theme }) => theme.typography.body.size.md};
    line-height: ${({ theme }) => theme.typography.body.height.lg};
`

export const Text = {
    Title,
    Supporting,
}
