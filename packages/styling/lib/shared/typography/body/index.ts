import type { BodyLineHeight } from './_height'
import type { BodySize } from './_size'

// Values
import { bodyLineHeight } from './_height'
import { bodySize } from './_size'

export interface Body {
    height: BodyLineHeight
    size: BodySize
}

export const body: Body = {
    height: bodyLineHeight,
    size: bodySize,
}

export type {}
