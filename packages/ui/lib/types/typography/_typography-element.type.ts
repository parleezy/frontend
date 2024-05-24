export const TypographyElementType = {
    H1: 'H1',
    H2: 'H2',
    H3: 'H3',
    H4: 'H4',
    H5: 'H5',
    H6: 'H6',
    OL: 'OL',
    PARAGRAPH: 'PARAGRAPH',
    UL: 'UL',
    LI: 'LI',
    SPAN: 'SPAN',
} as const

export type TypographyElementType = (typeof TypographyElementType)[keyof typeof TypographyElementType]
