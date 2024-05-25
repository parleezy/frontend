import { useNotificationsContext } from '@parleezy/ui'

// Styling
import { Layout } from './PrelaunchContainer.styled'

// Components
import { PrelaunchContent, PrelaunchImage } from './components'

export function PrelaunchContainer() {
    const { add } = useNotificationsContext()

    return (
        <Layout.Root>
            <button
                onClick={() =>
                    add({
                        id: new Date().toDateString(),
                        element: <Layout.Notification>I am inside this bitch</Layout.Notification>,
                    })
                }
            >
                Add
            </button>
            <Layout.Inner>
                <PrelaunchContent />
                <PrelaunchImage />
            </Layout.Inner>
        </Layout.Root>
    )
}
