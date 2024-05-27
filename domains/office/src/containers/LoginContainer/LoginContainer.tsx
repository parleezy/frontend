import { useTranslation } from 'react-i18next'

// Packages
import { H1, P } from '@parleezy/ui'

// Styling
import { Layout } from './LoginContainer.styled'

// Components
import { LoginForm } from '@/shared/components'

// Utils
import { i18Namespace } from '@/providers/translations'

export function LoginContainer() {
    const { t } = useTranslation()

    return (
        <Layout.Root>
            <Layout.Card>
                <Layout.Header>
                    <H1 size="SM" weight="medium">
                        {t('content.header.title', { ns: i18Namespace.PAGES_LOGIN })}
                    </H1>
                    <P color="tertiary" size="SM">
                        {t('content.header.supporting', { ns: i18Namespace.PAGES_LOGIN })}
                    </P>
                </Layout.Header>

                <LoginForm />
            </Layout.Card>
        </Layout.Root>
    )
}
