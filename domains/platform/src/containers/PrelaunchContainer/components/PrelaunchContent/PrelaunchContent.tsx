import { useTranslation } from 'react-i18next'

// Styling
import { Layout, Text } from './PrelaunchContent.styled'

// Components
import { NewsletterForm } from '@/shared'

export function PrelaunchContent() {
    const { t } = useTranslation()

    return (
        <Layout.Root>
            <Layout.Inner>
                <Text.Heading>{t('components/prelaunch-header:heading')}</Text.Heading>
                <Text.Supporting>{t('components/prelaunch-header:supporting')}</Text.Supporting>
            </Layout.Inner>

            <NewsletterForm />
        </Layout.Root>
    )
}
