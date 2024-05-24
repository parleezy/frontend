// Styling
import { ContentItemContentProps } from '@/components/index'

// Types
import { FrequentlyAskedQuestionsVariant } from './types/FrequentlyAskedQuestionsVariant.type'

// Variants
import {
    FrequentlyAskedQuestionsContentGrid,
    FrequentlyAskedQuestionsContentColumn,
    FrequentlyAskedQuestionsAccordion,
    FrequentlyAskedQuestionsAccordionColumn,
} from './variants'
import { AccordionVariantType } from '@/components/index'

export interface FrequentlyAskedQuestionsProps {
    config?: {
        center?: boolean
        orientation?: 'column' | 'row'
        focused?: boolean
        accordion?: AccordionVariantType
    }
    content: {
        heading: string
        subheading?: string
        supporting: string
        items: ContentItemContentProps[]
    }
    variant?: FrequentlyAskedQuestionsVariant
}

export function FrequentlyAskedQuestions({
    variant = FrequentlyAskedQuestionsVariant.CONTENT_GRID,
    ...rest
}: FrequentlyAskedQuestionsProps) {
    return (
        <>
            {(() => {
                switch (variant) {
                    case FrequentlyAskedQuestionsVariant.ACCORDION:
                        return <FrequentlyAskedQuestionsAccordion {...rest} />
                    case FrequentlyAskedQuestionsVariant.ACCORDION_COLUMN:
                        return <FrequentlyAskedQuestionsAccordionColumn {...rest} />
                    case FrequentlyAskedQuestionsVariant.CONTENT_COLUMN:
                        return <FrequentlyAskedQuestionsContentColumn {...rest} />
                    case FrequentlyAskedQuestionsVariant.CONTENT_GRID:
                    default:
                        return <FrequentlyAskedQuestionsContentGrid {...rest} />
                }
            })()}
        </>
    )
}
