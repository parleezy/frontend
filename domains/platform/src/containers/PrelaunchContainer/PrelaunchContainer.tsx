// Styling
import { Layout } from './PrelaunchContainer.styled'

// Components
import { PrelaunchContent, PrelaunchImage } from './components'

export function PrelaunchContainer() {
    return (
        <Layout.Root>
            <Layout.Inner>
                <PrelaunchContent />
                <PrelaunchImage />
            </Layout.Inner>
        </Layout.Root>
    )
}
