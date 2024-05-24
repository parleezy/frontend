// Test Utils
import { render, screen } from '@/utils/test'

// Components
import { Accordion } from './Accordion'

describe('Accordion Component', () => {
    it('renders without crashing', () => {
        const items = [{ id: 1, title: 'Item 1', text: 'Content 1' }]
        render(<Accordion items={items} />)

        expect(screen.getByText('Item 1')).toBeTruthy()
    })

    it('handles empty items array properly', () => {
        render(<Accordion data-testid="accordion" items={[]} />)

        expect(screen.getByTestId('accordion').innerHTML).toEqual('')
    })
})
