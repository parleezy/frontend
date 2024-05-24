import { rgba } from 'polished'
import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Toggle = styled.input`
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    height: 24px;
    width: 44px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.color.border.primary.base};
    background: ${({ theme }) => rgba(theme.color.border.primary.base, 0.25)};
    transition: ${({ theme }) => theme.animation.css.transition.all};

    &:focus {
        outline: 0;
    }

    &:after {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        transition: ${({ theme }) => theme.animation.css.transition.all};
    }

    &:checked {
        border-color: ${({ theme }) => theme.color.brand.secondary};
        background: ${({ theme }) => theme.color.brand.primary};

        &:after {
            transform: translateX(20px);
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
            background: ${({ theme }) => theme.color.background.primary.base};
        }
    }
`

export const Layout = {
    Root,
    Toggle,
}
