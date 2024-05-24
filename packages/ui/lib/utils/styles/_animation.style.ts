import { Transition, Variants } from 'framer-motion'

// Packages
import { ThemeInterface } from '@parleezy/styling'

// Types
import { AnimationTransitionType, AnimationVariantType } from '@/types/animation'

export class AnimationStyles {
    get Framer() {
        return {
            transition: (transition: AnimationTransitionType, theme: ThemeInterface): Transition => {
                switch (transition) {
                    case AnimationTransitionType.BASE_FAST:
                        return theme.animation.framer.transition.default.fast
                    case AnimationTransitionType.BASE_SLOW:
                        return theme.animation.framer.transition.default.slow
                    case AnimationTransitionType.SCALE_DEFAULT:
                        return theme.animation.framer.transition.scale.primary
                    case AnimationTransitionType.BASE_DEFAULT:
                    default:
                        return theme.animation.framer.transition.default.primary
                }
            },
            variant: (variant: AnimationVariantType, theme: ThemeInterface): Variants => {
                switch (variant) {
                    case AnimationVariantType.DRAWER_BOTTOM:
                        return theme.animation.framer.variant.drawer.bottom
                    case AnimationVariantType.DRAWER_TOP:
                        return theme.animation.framer.variant.drawer.top
                    case AnimationVariantType.DRAWER_LEFT:
                        return theme.animation.framer.variant.drawer.left
                    case AnimationVariantType.DRAWER_RIGHT:
                        return theme.animation.framer.variant.drawer.right
                    case AnimationVariantType.MOBILE:
                        return theme.animation.framer.variant.mobile.primary
                    case AnimationVariantType.SCALE:
                        return theme.animation.framer.variant.scale.primary
                    case AnimationVariantType.SLIDE_DOWN:
                        return theme.animation.framer.variant.slideFade.down
                    case AnimationVariantType.SLIDE_UP:
                        return theme.animation.framer.variant.slideFade.up
                    case AnimationVariantType.SLIDE_LEFT:
                        return theme.animation.framer.variant.slideFade.left
                    case AnimationVariantType.SLIDE_RIGHT:
                        return theme.animation.framer.variant.slideFade.right
                    case AnimationVariantType.FADE:
                    default:
                        return theme.animation.framer.variant.fade.primary
                }
            },
        }
    }
}
