import React from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { H4 } from './H4'

describe('<H4 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<H4>{testContent}</H4>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H4')
    })

    it('forwards ref correctly', () => {
        const ref = React.createRef<HTMLHeadingElement>()
        render(<H4 ref={ref}>Ref forwarding</H4>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H4')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
