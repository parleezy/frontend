// Styling
import { Layout } from './FrequentlyAskedQuestionsContentGrid.styled'

// Types
import { FrequentlyAskedQuestionsProps } from '@/common/templates/FrequentlyAskedQuestions'

// Components
import { FrequentlyAskedQuestionsHeader } from '@/common/templates/FrequentlyAskedQuestions/components'
import { ContentItem } from '@/components/index'

export function FrequentlyAskedQuestionsContentGrid({ config, content, ...rest }: FrequentlyAskedQuestionsProps) {
    return (
        <Layout.Root {...rest}>
            <FrequentlyAskedQuestionsHeader
                center={config?.center}
                heading={content.heading}
                subheading={content.subheading}
                supporting={content.supporting}
            />

            <Layout.Main>
                {content.items.map((item, i) => (
                    <ContentItem key={i} config={config} content={item} />
                ))}
            </Layout.Main>
        </Layout.Root>
    )
}
