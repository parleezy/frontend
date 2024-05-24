import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { Span } from './Span'

describe('<Span />', () => {
    it('renders children correctly', () => {
        const testMessage = 'Test Message'
        render(<Span>{testMessage}</Span>)

        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })

    it('can be referenced using a ref', () => {
        const ref = createRef<HTMLSpanElement>()
        render(<Span ref={ref}>Ref Test</Span>)

        expect(ref.current).toBeInstanceOf(HTMLSpanElement)
        expect(ref.current?.textContent).toBe('Ref Test')
    })
})
