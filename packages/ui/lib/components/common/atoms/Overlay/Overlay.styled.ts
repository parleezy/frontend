import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import { motion } from 'framer-motion'

const Root = styled(motion(Div100vh))`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: ${({ theme }) => theme.color.alpha.black[50]};
`

export const Layout = {
    Root,
}
