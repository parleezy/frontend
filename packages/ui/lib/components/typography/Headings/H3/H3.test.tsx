import { createRef } from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { H3 } from './H3'

describe('<H3 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<H3>{testContent}</H3>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H3')
    })

    it('forwards ref correctly', () => {
        const ref = createRef<HTMLHeadingElement>()
        render(<H3 ref={ref}>Ref forwarding</H3>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H3')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
