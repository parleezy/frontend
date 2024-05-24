import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout, Line } from './Divider.styled'

export interface DividerProps {
    background?: string
    color?: string
}

export const Divider = forwardRef<HTMLDivElement, PropsWithChildren<DividerProps>>(function Base(
    { background, color, children, ...rest },
    ref,
) {
    return (
        <Layout.Root ref={ref} {...rest}>
            <Line.Wrapper color={color}>
                <Line.Inner />
            </Line.Wrapper>
            <Layout.Main>{children && <Layout.Container color={background}>{children}</Layout.Container>}</Layout.Main>
        </Layout.Root>
    )
})
