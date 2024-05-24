import { HeartIcon } from '@parleezy/icons'

// Test Utils
import { render, screen } from '@/utils/test'

// Components
import { ContentItem } from './ContentItem'

describe('ContentItem Component', () => {
    const title = 'Test Title'
    const text = 'Test Text'

    it('renders without crashing', () => {
        render(<ContentItem content={{ title, text }} />)

        expect(screen.getByText('Test Title')).toBeInTheDocument()
        expect(screen.getByText('Test Text')).toBeInTheDocument()
    })

    it('displays an icon when provided', () => {
        render(
            <ContentItem
                content={{
                    icon: <HeartIcon data-testid="icon" />,
                    title,
                    text,
                }}
            />,
        )
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('handles the center configuration', () => {
        const { container } = render(<ContentItem config={{ center: true }} content={{ title, text }} />)

        expect(container.firstChild).toHaveStyle('align-items: center')
    })

    it('adjusts layout based on orientation configuration', () => {
        const { container } = render(<ContentItem config={{ orientation: 'row' }} content={{ title, text }} />)

        expect(container.firstChild).toHaveStyle('flex-direction: row')
    })
})
