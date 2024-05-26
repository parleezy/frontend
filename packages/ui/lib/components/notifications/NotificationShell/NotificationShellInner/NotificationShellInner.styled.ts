import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
    $mobile: boolean
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

    ${({ $mobile, $y }) =>
        $mobile &&
        `
            top: 20px;
            left: 20px;
            transform: translateY(${$y}px);
        `}
`

export const Layout = {
    Root,
}
