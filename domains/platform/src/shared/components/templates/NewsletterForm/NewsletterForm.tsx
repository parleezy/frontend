import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import { BeatLoader } from 'react-spinners'
import * as z from 'zod'

// Icons
import { RiMailSendLine } from 'react-icons/ri'

// Packages
import { Button, DefaultNotification, Input, useNotificationsContext } from '@parleezy/ui'

// Styling
import { Layout } from './NewsletterForm.styled'

// Types
import { i18Namespace } from '@/providers/translations/i18next.namespaces'

// Data
import { useNewsletterSignupMutation } from '@/data/mutations'

export function NewsletterForm() {
    const { t } = useTranslation()
    const notification = useNotificationsContext()

    const schema = z.object({
        email: z
            .string({
                required_error: t('input.email.required', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM }),
            })
            .email({ message: t('input.email.invalid', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM }) })
            .min(1),
    })

    type Schema = z.infer<typeof schema>

    const { handleSubmit, formState, register, reset, setError } = useForm<Schema>({
        reValidateMode: 'onBlur',
        shouldFocusError: true,
        resolver: zodResolver(schema),
    })

    const mutation = useNewsletterSignupMutation()

    const onSubmit = (data: Schema) => {
        mutation.mutate(data, {
            onSuccess: () => {
                reset()

                notification.add({
                    id: new Date().getTime().toString(),
                    config: {
                        position: 'TOP_RIGHT',
                    },
                    element: (remove?: () => void) => (
                        <DefaultNotification
                            description={t('notification.description', { ns: 'components/newsletter-form' })}
                            leading={<RiMailSendLine size="18px" />}
                            remove={remove}
                            title={t('notification.title', { ns: 'components/newsletter-form' })}
                        />
                    ),
                })
            },
            onError: () => {
                setError('email', {
                    message: t('input.email.failure', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM }),
                })
            },
        })
    }

    return (
        <Layout.Root onSubmit={handleSubmit(onSubmit)}>
            <Input
                disabled={mutation.isPending}
                error={formState.errors.email?.message}
                id="id"
                placeholder={t('input.email.placeholder', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM })}
                {...register('email')}
            />
            <Button disabled={mutation.isPending} type="submit">
                {mutation.isPending ? (
                    <BeatLoader color="#fff" size={8} speedMultiplier={0.75} />
                ) : (
                    t('button.cta', { ns: i18Namespace.COMPONENTS_NEWSLETTER_FORM })
                )}
            </Button>
        </Layout.Root>
    )
}
