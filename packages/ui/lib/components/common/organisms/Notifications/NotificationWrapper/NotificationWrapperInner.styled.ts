import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
    $x?: number
    $y?: number
}

const Root = styled(motion.div)<Props>`
    position: fixed;
    cursor: grab;
    user-select: none;
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:active {
        cursor: grabbing;
    }

    ${({ $x }) =>
        $x &&
        `
        transform: translateX(${$x}px);
    `}

    ${({ $y }) =>
        $y &&
        `
        transform: translateY(${$y}px);
    `}
`

export const Layout = {
    Root,
}
