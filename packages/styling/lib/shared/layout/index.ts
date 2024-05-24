import type { Breakpoint } from './_breakpoint'
import type { Height } from './_height'
import type { Padding } from './_padding'
import type { Radius } from './_radius'
import type { Spacing } from './_spacing'
import type { Width } from './_width'

// Values
import { breakpoint } from './_breakpoint'
import { height } from './_height'
import { padding } from './_padding'
import { radius } from './_radius'
import { spacing } from './_spacing'
import { width } from './_width'

export interface Layout {
    breakpoint: Breakpoint
    height: Height
    padding: Padding
    radius: Radius
    spacing: Spacing
    width: Width
}

export const layout: Layout = {
    breakpoint,
    height,
    padding,
    radius,
    spacing,
    width,
}

export type { Breakpoint, Height, Padding, Radius, Spacing, Width }
