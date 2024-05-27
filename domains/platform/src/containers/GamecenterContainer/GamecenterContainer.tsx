import { Layout } from './GamecenterContainer.styled'

export function GamecenterContainer() {
    return (
        <Layout.Root>
            <div>
                <ul>
                    <li>Check if the user has been verified - block if not</li>
                    <li>Check if the user has been properly onboarded</li>
                    <li>Get users location to calculate feeds</li>
                </ul>
            </div>
        </Layout.Root>
    )
}
