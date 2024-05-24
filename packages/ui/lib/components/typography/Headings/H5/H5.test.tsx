import React from 'react'

// Test Utils
import { render, screen } from '@/utils/test'

// Component
import { H5 } from './H5'

describe('<H5 />', () => {
    it('renders children correctly', () => {
        const testContent = 'Hello, world!'
        render(<H5>{testContent}</H5>)

        const headingElement = screen.getByRole('heading', { name: testContent })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement.tagName).toBe('H5')
    })

    it('forwards ref correctly', () => {
        const ref = React.createRef<HTMLHeadingElement>()
        render(<H5 ref={ref}>Ref forwarding</H5>)

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
        expect(ref.current?.tagName).toBe('H5')
        expect(ref.current?.textContent).toBe('Ref forwarding')
    })
})
