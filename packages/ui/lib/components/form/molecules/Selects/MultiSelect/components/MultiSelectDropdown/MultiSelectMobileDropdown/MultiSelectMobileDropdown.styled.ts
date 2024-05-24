import styled from 'styled-components'

// Utils
import { Style } from '@/utils/styles'

const Root = styled.div`
    ${({ theme }) => Style.Form.Selects.mobile(theme)};

    border-top-right-radius: ${({ theme }) => theme.layout.radius.lg};
    border-top-left-radius: ${({ theme }) => theme.layout.radius.lg};
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:focus-within {
        max-height: 40vh;
    }
`

const Container = styled.div`
    input {
        font-size: 16px;
    }
`

export const Layout = {
    Root,
    Container,
}
