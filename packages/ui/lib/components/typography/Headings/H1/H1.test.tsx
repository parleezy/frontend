import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { H1 } from './H1'

describe('<H1 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<H1>{testContent}</H1>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H1')
    })

    it('forwards ref correctly', () => {
        const ref = createRef<HTMLHeadingElement>()
        render(<H1 ref={ref}>Ref forwarding</H1>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H1')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
