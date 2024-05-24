// Styling
import { Layout } from './FrequentlyAskedQuestionsAccordionColumn.styled'

// Components
import { FrequentlyAskedQuestionsHeader } from '@/common/templates/FrequentlyAskedQuestions/components/FrequentlyAskedQuestionsHeader'

// Types
import { FrequentlyAskedQuestionsProps } from '@/common/templates/FrequentlyAskedQuestions'
import { Accordion } from '@/components/index'

export function FrequentlyAskedQuestionsAccordionColumn({ config, content, ...rest }: FrequentlyAskedQuestionsProps) {
    return (
        <Layout.Root {...rest}>
            <FrequentlyAskedQuestionsHeader
                center={config?.center}
                heading={content.heading}
                subheading={content.subheading}
                supporting={content.supporting}
            />

            <Layout.Main>
                <Accordion items={content.items} />
            </Layout.Main>
        </Layout.Root>
    )
}
