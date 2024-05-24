import { createRoot } from 'react-dom/client'

// Providers
import { Providers } from './providers'

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
    const root = createRoot(rootElement)
    root.render(<Providers />)
}
