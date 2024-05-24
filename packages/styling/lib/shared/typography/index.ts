import type { Body } from './body'
import type { Font } from './font'
import type { Heading } from './heading'

// Value
import { body } from './body'
import { font } from './font'
import { heading } from './heading'

export interface Typography {
    body: Body
    font: Font
    heading: Heading
}

export const typography: Typography = {
    body,
    font,
    heading,
}

export * from './font'

export type { Font }
