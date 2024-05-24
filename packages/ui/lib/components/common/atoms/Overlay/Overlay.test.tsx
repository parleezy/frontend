import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { Overlay as Component } from './Overlay'

describe('<Overlay />', () => {
    it('renders correctly', () => {
        render(<Component data-testid="overlay" />)
        const el = screen.getByTestId('overlay')

        expect(el).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLDivElement>()
        render(<Component ref={ref} data-testid="overlay" />)

        expect(ref.current).toBeInstanceOf(HTMLDivElement)
        expect(ref.current).toHaveAttribute('data-testid', 'overlay')
    })
})
