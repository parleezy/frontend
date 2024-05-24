import { useTranslation } from 'react-i18next'

// Styling
import { Layout, Text } from './PrelaunchContent.styled'

export function PrelaunchHeader() {
    const { t } = useTranslation()

    return (
        <Layout.Root>
            <Text.Heading>{t('components/prelaunch-header:heading')}</Text.Heading>
            <Text.Supporting>{t('components/prelaunch-header:supporting')}</Text.Supporting>
        </Layout.Root>
    )
}
