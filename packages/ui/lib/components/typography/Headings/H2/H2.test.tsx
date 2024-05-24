import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { H2 } from './H2'

describe('<H2 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<H2>{testContent}</H2>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H2')
    })

    it('forwards ref correctly', () => {
        const ref = createRef<HTMLHeadingElement>()
        render(<H2 ref={ref}>Ref forwarding</H2>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H2')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
