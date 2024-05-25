import styled from 'styled-components'

interface Props {
    x: number
}

const Root = styled.div<Props>`
    position: fixed;
    bottom: 20px;
    left: 20px;
    cursor: grab;
    user-select: none;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    transform: translateX(${({ x }) => x}px);

    &:active {
        cursor: grabbing;
    }
`

export const Layout = {
    Root,
}
