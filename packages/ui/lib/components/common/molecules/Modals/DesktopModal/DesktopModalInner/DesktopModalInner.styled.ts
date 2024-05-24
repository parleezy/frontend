import styled from 'styled-components'
import { motion } from 'framer-motion'

const Root = styled(motion.div)`
    position: fixed;
    transform-origin: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Layout = {
    Root,
}
