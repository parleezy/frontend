import { useForm } from 'react-hook-form'
// import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Packages
import { Button, Input } from '@parleezy/ui'

// Styling
import { Layout } from './NewsletterForm.styled'

export function NewsletterForm() {
    // const { t } = useTranslation()

    const schema = z.object({
        email: z
            .string({
                required_error: 'required',
            })
            .email({ message: 'invalid email' })
            .min(1),
    })

    type Schema = z.infer<typeof schema>

    const { handleSubmit } = useForm<Schema>({
        reValidateMode: 'onBlur',
        shouldFocusError: true,
        resolver: zodResolver(schema),
    })

    const onSubmit = (data: Schema) => {
        console.warn(data)
    }

    return (
        <>
            <Layout.Root onSubmit={handleSubmit(onSubmit)}>
                <Input id="id" placeholder="Enter your email" />
                <Button>Signup</Button>
            </Layout.Root>
        </>
    )
}
