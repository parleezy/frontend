import { it, expect } from 'vitest'

// Component
import { Divider as Component } from './Divider'

// Test Utils
import { screen, render } from '@/utils/test'

describe('<Divider />', () => {
    it('renders correctly', () => {
        render(<Component data-testid="divider" />)
        const el = screen.getByTestId('divider')

        expect(el).toBeInTheDocument()
    })
})
