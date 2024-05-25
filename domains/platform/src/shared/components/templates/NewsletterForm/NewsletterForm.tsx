import { Button, Input } from '@parleezy/ui'

// Styling
import { Layout } from './NewsletterForm.styled'

export function NewsletterForm() {
    return (
        <Layout.Root>
            <Input id="id" placeholder="Enter your email" />
            <Button>Signup</Button>
        </Layout.Root>
    )
}
