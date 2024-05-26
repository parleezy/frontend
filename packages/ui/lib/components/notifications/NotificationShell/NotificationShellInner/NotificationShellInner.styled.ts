import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NotificationPositionType } from '@/notifications/types'

interface Props {
    $position: NotificationPositionType | 'MOBILE'
}

const Root = styled(motion.div)<Props>`
    position: fixed;
    cursor: grab;
    user-select: none;
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:active {
        cursor: grabbing;
    }

    ${({ $position }) => {
        switch ($position) {
            case 'TOP_RIGHT':
                return `top: 20px; right: 20px;`
            case 'TOP_LEFT':
                return `top: 20px; left: 20px;`
            case 'BOTTOM_RIGHT':
                return `bottom: 20px; right: 20px;`
            case 'BOTTOM_LEFT':
                return `bottom: 20px; left: 20px;`
            case 'MOBILE':
                return `top: 20px; left: 20px;`
            default:
                return ``
        }
    }}
`

export const Layout = {
    Root,
}
