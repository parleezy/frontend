import styled from 'styled-components'

import { ScrollableArea } from '@/components/index'

const Root = styled(ScrollableArea)`
    background: ${({ theme }) => theme.color.background.primary.base};
    overflow: scroll;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    width: 100vw;
    border-top-left-radius: ${({ theme }) => theme.layout.radius.xl2};
    border-top-right-radius: ${({ theme }) => theme.layout.radius.xl2};
    max-height: 60vh;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        width: 300px;
        border-radius: ${({ theme }) => theme.layout.radius.sm};
    }
`

export const Layout = {
    Root,
}
