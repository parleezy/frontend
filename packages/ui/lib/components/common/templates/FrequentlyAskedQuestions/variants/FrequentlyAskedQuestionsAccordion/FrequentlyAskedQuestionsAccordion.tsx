// Components
import { Accordion } from '@/components/index'
import { FrequentlyAskedQuestionsHeader } from '@/common/templates/FrequentlyAskedQuestions/components/FrequentlyAskedQuestionsHeader'

// Styling
import { Layout } from './FrequentlyAskedQuestionsAccordion.styled'

// Types
import { FrequentlyAskedQuestionsProps } from '@/common/templates/FrequentlyAskedQuestions'

export function FrequentlyAskedQuestionsAccordion({ config, content, ...rest }: FrequentlyAskedQuestionsProps) {
    return (
        <Layout.Root {...rest}>
            <FrequentlyAskedQuestionsHeader
                center={true}
                heading={content.heading}
                subheading={content.subheading}
                supporting={content.supporting}
            />

            <Layout.Main>
                <Accordion config={{ ...config, variant: config?.accordion || 'LIST' }} items={content.items} />
            </Layout.Main>
        </Layout.Root>
    )
}
