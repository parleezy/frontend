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
    border-top: 1px solid ${({ theme }) => theme.color.border.primary.base};
    padding: ${({ theme }) => theme.layout.spacing.md} ${({ theme }) => theme.layout.spacing.xl2};
`

const Input = styled.input`
    ${({ theme }) => Style.Form.Selects.input(theme)};
    height: ${({ theme }) => theme.layout.height.lg};
    font-size: ${({ theme }) => theme.typography.body.size.lg};
`

export const Layout = {
    Root,
    Container,
    Input,
}
