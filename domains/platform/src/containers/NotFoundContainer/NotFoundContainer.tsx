import { Link } from '@tanstack/react-router'

// Styling
import { Layout, Text } from './NotFoundContainer.styled'

export function NotFoundContainer() {
    return (
        <Layout.Root>
            <Layout.Inner>
                <Text.Heading>Not Found</Text.Heading>
                <Text.Supporting>
                    Oops! The page you&apos;re looking for doesn&apos;t seem to exist. It might have been moved or
                    deleted. Please check the URL or return to the <Link to="/">homepage</Link>.
                </Text.Supporting>
            </Layout.Inner>
        </Layout.Root>
    )
}
