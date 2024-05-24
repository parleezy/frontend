import type { Badge } from './badge'
import type { Button } from './button'
import type { SocialButton } from './social-button'

import { badge } from './badge'
import { button } from './button'
import { socialButton } from './social-button'

export interface Component {
    badge: Badge
    button: Button
    social_button: SocialButton
}

export const component: Component = {
    badge,
    button,
    social_button: socialButton,
}

export * from './badge'
export * from './button'
export * from './social-button'

export type { Badge, Button, SocialButton }
