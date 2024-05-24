import styled from 'styled-components'

// Components
import { ScrollableArea } from '@/components/common/atoms'

const Root = styled(ScrollableArea)`
    overflow: scroll;
    width: 100%;
    flex-grow: 1;
    transition: ${({ theme }) => theme.animation.css.transition.all};
    height: 100%;

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        @media (max-height: 500px) {
            max-height: 200px;
        }

        @media (min-height: 501px) and (max-height: 700px) {
            max-height: 250px;
        }

        @media (min-height: 701px) and (max-height: 900px) {
            max-height: 300px;
        }

        @media (min-height: 901px) {
            max-height: 350px;
        }
    }
`

export const Layout = {
    Root,
}
