import { Notification, useNotificationsContext } from '@parleezy/ui'

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
                        element: (
                            <Notification>
                                <Layout.Notification>Hello My nigga</Layout.Notification>
                            </Notification>
                        ),
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
