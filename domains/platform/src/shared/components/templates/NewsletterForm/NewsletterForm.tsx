import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Packages
import { Button, Input } from '@parleezy/ui'

// Styling
import { Layout } from './NewsletterForm.styled'

// Types
import { i18Namespace } from '@/providers/translations/i18next.namespaces'

export function NewsletterForm() {
    const { t } = useTranslation()

    const schema = z.object({
        email: z
            .string({
                required_error: t('input.email.required', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM }),
            })
            .email({ message: t('input.email.invalid', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM }) })
            .min(1),
    })

    type Schema = z.infer<typeof schema>

    const { handleSubmit, formState, register } = useForm<Schema>({
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
                <Input
                    error={formState.errors.email?.message}
                    id="id"
                    placeholder={t('input.email.placeholder', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM })}
                    {...register('email')}
                />
                <Button type="submit">{t('button.cta', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM })}</Button>
            </Layout.Root>
        </>
    )
}
