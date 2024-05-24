import styled from 'styled-components'

// Hooks
import { ElementCoordinates } from '@/hooks/useElementCoordinates'
import { Style } from '@/utils/styles'

interface Props {
    $below: boolean
    $coordinates: ElementCoordinates | null
}

const Root = styled.div<Props>`
    ${({ $below, $coordinates, theme }) => Style.Form.Selects.dropdown($below, $coordinates, theme)});
`

export const Layout = {
    Root,
}
