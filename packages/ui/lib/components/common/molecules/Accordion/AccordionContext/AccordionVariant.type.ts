export const AccordionVariantType = {
    CARD: 'CARD',
    LIST: 'LIST',
} as const

export type AccordionVariantType = (typeof AccordionVariantType)[keyof typeof AccordionVariantType]
