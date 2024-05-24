// Styling

import { Layout } from './FrequentlyAskedQuestionsContentColumn.styled'

// Components
import { FrequentlyAskedQuestionsHeader } from '@/common/templates/FrequentlyAskedQuestions/components/FrequentlyAskedQuestionsHeader'
import { ContentItem } from '@/components/index'

// Types
import { FrequentlyAskedQuestionsProps } from '@/common/templates/FrequentlyAskedQuestions'

export function FrequentlyAskedQuestionsContentColumn({ config, content, ...rest }: FrequentlyAskedQuestionsProps) {
    return (
        <Layout.Root {...rest}>
            <FrequentlyAskedQuestionsHeader
                center={config?.center}
                heading={content.heading}
                subheading={content.subheading}
                supporting={content.supporting}
            />

            <Layout.Main>
                {content.items.map((item, i) => {
                    return <ContentItem key={i} config={{ ...config, orientation: 'row' }} content={item} />
                })}
            </Layout.Main>
        </Layout.Root>
    )
}
