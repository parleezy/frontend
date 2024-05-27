import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Packages
import { Button, Input, InsetInput, InsetInputGroup, PasswordInput, PasswordInsetInput } from '@parleezy/ui'

// Styling
import { Layout, Link } from './LoginForm.styled'

// Types
import { i18Namespace } from '@/providers/translations/i18next.namespaces'

interface Props {
    inset?: boolean
}

export function LoginForm({ inset = false }: Props) {
    const { t } = useTranslation()

    const schema = z.object({
        email: z
            .string({
                required_error: t('input.email.required', { ns: i18Namespace.COMPONENTS_LOGIN_FORM }),
            })
            .email({ message: t('input.email.invalid', { ns: i18Namespace.COMPONENTS_LOGIN_FORM }) })
            .min(1),
        password: z
            .string({
                required_error: t('input.password.required', { ns: i18Namespace.COMPONENTS_LOGIN_FORM }),
            })
            .min(8),
    })

    type Schema = z.infer<typeof schema>

    const { handleSubmit, register } = useForm<Schema>({
        reValidateMode: 'onBlur',
        shouldFocusError: true,
        resolver: zodResolver(schema),
    })

    const onSubmit = (data: Schema) => {
        // TODO

        console.warn(data)
    }

    return (
        <Layout.Root onSubmit={handleSubmit(onSubmit)}>
            {inset ? (
                <InsetInputGroup>
                    <InsetInput
                        id="id"
                        label={t('input.email.label', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
                        placeholder={t('input.email.placeholder', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
                        {...register('email')}
                    />

                    <PasswordInsetInput
                        id="password"
                        label={t('input.password.label', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
                        placeholder="********"
                        {...register('password')}
                    />
                </InsetInputGroup>
            ) : (
                <>
                    <Input
                        id="id"
                        label={t('input.email.label', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
                        placeholder={t('input.email.placeholder', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
                        {...register('email')}
                    />

                    <PasswordInput
                        id="password"
                        label={t('input.password.label', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
                        placeholder="********"
                        {...register('password')}
                    />
                </>
            )}

            <Link.Recover to="/recover">Forgot Password?</Link.Recover>

            <Button full type="submit">
                {t('button.cta', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
            </Button>
        </Layout.Root>
    )
}
