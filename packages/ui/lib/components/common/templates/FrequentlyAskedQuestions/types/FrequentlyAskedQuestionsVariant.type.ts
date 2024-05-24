export const FrequentlyAskedQuestionsVariant = {
    ACCORDION: 'ACCORDION',
    ACCORDION_COLUMN: 'ACCORDION_COLUMN',
    CONTENT_GRID: 'CONTENT_GRID',
    CONTENT_COLUMN: 'CONTENT_COLUMN',
} as const

export type FrequentlyAskedQuestionsVariant =
    (typeof FrequentlyAskedQuestionsVariant)[keyof typeof FrequentlyAskedQuestionsVariant]
