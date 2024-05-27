import { useTranslation } from 'react-i18next'

// Packages
import { H1, P } from '@parleezy/ui'

// Components
import { LoginForm } from '@/shared'

// Styling
import { Layout, Link } from './LoginContainer.styled'

// Utils
import { i18Namespace } from '@/providers/translations'

export function LoginContainer() {
    const { t } = useTranslation()

    return (
        <Layout.Root>
            <Layout.Advertisement></Layout.Advertisement>
            <Layout.Form>
                <Layout.FormInner>
                    <Layout.Header>
                        <H1 size="MD" weight="semibold">
                            {t('content.header.title', { ns: i18Namespace.PAGES_LOGIN })}
                        </H1>
                        <P color="tertiary" size="SM">
                            {t('content.header.supporting', { ns: i18Namespace.PAGES_LOGIN })}
                        </P>
                    </Layout.Header>

                    <LoginForm inset />

                    <Link.Signup to="/signup">
                        {t('link.signup', { ns: i18Namespace.COMPONENTS_LOGIN_FORM })}
                    </Link.Signup>
                </Layout.FormInner>
            </Layout.Form>
        </Layout.Root>
    )
}
