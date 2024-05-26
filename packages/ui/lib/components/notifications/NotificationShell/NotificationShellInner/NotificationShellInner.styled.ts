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

    ${({ $y }) =>
        $y &&
        `
            top: 20px;
            left: 20px;
            transform: translateY(${$y}px);
        `}
`

export const Layout = {
    Root,
}
