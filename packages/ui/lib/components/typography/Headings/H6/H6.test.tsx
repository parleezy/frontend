import React from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { H6 } from './H6'

describe('<H6 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<H6>{testContent}</H6>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H6')
    })

    it('forwards ref correctly', () => {
        const ref = React.createRef<HTMLHeadingElement>()
        render(<H6 ref={ref}>Ref forwarding</H6>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H6')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
