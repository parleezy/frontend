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

    // Positioning
    bottom: 20px;
    right: 20px;

    ${({ $x }) =>
        $x &&
        `
        transform: translateX(${$x}px);
    `}

    ${({ $y }) =>
        $y &&
        `
        transform: translateX(${$y}px);
    `}
`

export const Layout = {
    Root,
}
