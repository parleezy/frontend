import { createRoot } from 'react-dom/client'

// Providers
import { Providers } from './providers'

// Styling
import './shared/styles/font.css'

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
    const root = createRoot(rootElement)
    root.render(<Providers />)
}
