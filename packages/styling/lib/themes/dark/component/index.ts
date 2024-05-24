import { Component, component } from '@/shared/component'

// Dark
import { darkSocialButton } from './social-button/index'
import { darkButton } from './button/index'

export const darkComponent: Component = {
    ...component,
    button: {
        ...darkButton,
    },
    social_button: {
        ...darkSocialButton,
    },
}
