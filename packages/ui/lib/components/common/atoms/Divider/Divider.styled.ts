import styled from 'styled-components'

const Root = styled.div`
    position: relative;
    max-width: 800px;
    width: 100%;
`

const Main = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 10px 0;
`

const Container = styled.div<{ color?: string }>`
    flex-shrink: 0;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, color }) => (color ? color : theme.color.background.primary.base)};
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    inset: 0px;
    position: absolute;
    padding: 0 20px;
`

const Inner = styled.div<{ color?: string }>`
    flex-grow: 1;
    border-top: 1px solid ${({ theme, color }) => (color ? color : theme.color.border.primary.base)};
`

export const Layout = {
    Root,
    Main,
    Container,
}

export const Line = {
    Wrapper,
    Inner,
}
