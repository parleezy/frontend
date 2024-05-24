import { useTranslation } from 'react-i18next'

// Styling
import { Layout, Text } from './NotFoundContainer.styled'

export function NotFoundContainer() {
    const { t } = useTranslation()

    return (
        <Layout.Root>
            <Layout.Inner>
                <Text.Heading>{t('pages/not-found:heading')}</Text.Heading>
                <Text.Supporting>
                    {t('pages/not-found:supporting', {
                        link: <Text.A to="/">{t('pages/not-found:link')}</Text.A>,
                    })}
                </Text.Supporting>
            </Layout.Inner>
        </Layout.Root>
    )
}
