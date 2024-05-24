import { HeadingLineHeight } from './_height'
import { HeadingSize } from './_size'
import { HeadingTracking } from './_tracking'

// Value
import { headingLineHeight } from './_height'
import { headingSize } from './_size'
import { headingTracking } from './_tracking'

export interface Heading {
    height: HeadingLineHeight
    size: HeadingSize
    tracking: HeadingTracking
}

export const heading: Heading = {
    height: headingLineHeight,
    size: headingSize,
    tracking: headingTracking,
}

export type { HeadingLineHeight, HeadingSize, HeadingTracking }
